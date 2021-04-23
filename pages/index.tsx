import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import api from "../services/api";
import GraphModal from "../components/GraphModal";
import InvestmentCard from "../components/InvestmentCard";
import LoadingModal from "../components/LoadingModal";

interface InvestmentDTO {
  date: string,
  unitPrice: number
}

export default function Home() {
  const [ investmentDate, setInvestmentDate ] = useState('');
  const [ currentDate, setCurrentDate ] = useState('');
  const [ cdbRate, setCdbRate ] = useState('');
  const [ tempData, setTempData ] = useState<InvestmentDTO[][]>([]);
  const [ graphData, setGraphData ] = useState<InvestmentDTO[]>([]);
  const [ loading, setLoading ] = useState(false);

  const handleEditDate = (value: string, check: string, setFormat: Function) => {
    let formatedDate = value.replace(/[^0-9/-]/g, '');
    if(value.length < check.length){
      setFormat(formatedDate);
    } else if(value.length < 11){
      if (value.length === 4 || value.length === 7) {
        setFormat(formatedDate.concat('-'));
      } else {
        setFormat(formatedDate);
      }
    }
  }

  const handleSetNumber = (value: string) => {
    const formatedValue = value.replace(',','.').replace(/[^0-9.,]/g, '');

    setCdbRate(formatedValue);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [ investmentYear, investmentMonth, investmentDay ] = investmentDate.split('-');
    const [ currentYear, currentMonth, currentDay ] = currentDate.split('-');

    if(Number(investmentDay) > 31 || Number(investmentDay) < 1 ||
    Number(investmentMonth) > 12 || Number(investmentMonth) < 1 ||
    Number(investmentYear) < 1000 || Number(investmentYear) > 2100) {
      alert('Verifique a data inicial');
      return
    };

    if(Number(currentDay) > 31 || Number(currentDay) < 1 ||
    Number(currentMonth) > 12 || Number(currentMonth) < 1 ||
    Number(currentYear) < 1000 || Number(currentYear) > 2100) {
      alert('Verifique a data final');
      return
    };
    
    if(Number.isNaN(Number(cdbRate)) || cdbRate === '') {
      alert('Verifique a taxa do CDI.');
      return
    };

    if(new Date(investmentDate) >= new Date(currentDate)) {
      alert('A data final dever ser posterior a data inicial.');
      return
    }

    setLoading(true);

    const response = await api.post('/cdb', {
      investmentDate: `${investmentYear}-${investmentMonth}-${investmentDay}`,
      cdbRate: Number(cdbRate),
      currentDate: `${currentYear}-${currentMonth}-${currentDay}`
    });

    const receivedData: InvestmentDTO[] = response.data;

    setTempData([...tempData, receivedData]);
    setCdbRate('');
    setCurrentDate('');
    setInvestmentDate('');
    setLoading(false);
  }

  const handleDelete = (index: number) => {
    const newInvestData = tempData.filter((data, filterIndex) => {
      return filterIndex !== index;
    });
    setTempData(newInvestData);
  }

  return (
    <div className="max-w-4xl m-auto">
      {loading && <LoadingModal/>}

      {/** Header */}
      <div className="flex flex-col-reverse">
        <motion.div
          className="bg-gray-100 rounded-b w-10/12 m-auto"
          initial={{ scale: 1, y: -200 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 460,
            damping: 100,
            delay: 1
          }}
        >
          <h1 className="text-base px-1 sm:px-2 py-1 text-center md:text-lg text-gray-700">
          Preencha os campos e acompanhe a evolução dos seus investimentos!
          </h1>
        </motion.div>
        <motion.div
          className="bg-gray-100 rounded-b-3xl shadow-md px-4 py-2"
          initial={{ scale: 1, y: -200 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h1 className="font-bold text-lg text-center sm:text-xl md:text-2xl text-gray-900">
            Simulação de Investimento em Renda Fixa - CDB Pós-Fixado
          </h1>
        </motion.div>
      </div>

      {/** Input box */}
      <motion.div
        className="flex justify-center mt-8 px-8"
        initial={{ scale: 0, y: -200 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2
        }}
      >
        <div className="flex flex-col w-full max-w-xs bg-gray-100 px-3 pt-4 pb-4 sm:pb-8 rounded-3xl shadow-md">
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
          <span
              className="text-sm text-center"
            >Qual a data
            <span className="font-bold mx-1">
            inicial
            </span>
            do investimento?</span>
            <input
              className="w-56 h-8 bg-white mt-2 self-center px-2 rounded-lg text-center mb-4"
              placeholder="aaaa-mm-dd"
              value={investmentDate}
              onChange={(e) => handleEditDate(e.target.value, investmentDate, setInvestmentDate)}
            />
            
            <span
              className="text-sm text-center"
            >Qual a data
            <span className="font-bold mx-1">
            final
            </span>
            do investimento?</span>
            <input
              className="w-56 h-8 bg-white mt-2 self-center px-2 rounded-lg text-center mb-4"
              placeholder="aaaa-mm-dd"
              value={currentDate}
              onChange={(e) => handleEditDate(e.target.value, currentDate, setCurrentDate)}
            />
            
            <span
              className="text-sm text-center"
            >Qual a
            <span className="font-bold mx-1">
            taxa
            </span>
            do CDI?</span>
            <input
              className="w-56 h-8 bg-white mt-2 self-center px-2 rounded-lg text-center mb-4"
              placeholder="xxx.xx"
              value={cdbRate}
              onChange={(e) => handleSetNumber(e.target.value)}
            />

            <button
              type="submit"
              className="w-28 h-8 mt-4 mr-2 rounded-lg bg-blue-900 text-white self-end"
            >
              ADICIONAR
            </button>
          </form>
        </div>
      </motion.div>

      { tempData.length > 0 && (
        <div className="px-4 my-8 max-w-3xl m-auto">
          <div className="hidden sm:flex w-full">
            <div className="w-1/4 flex justify-center">
              <span
                className="bg-blue-900 text-white px-2 rounded-md"
              >Data Inicial</span>
            </div>
            <div className="w-1/4 flex justify-center">
              <span
                className="bg-blue-900 text-white px-2 rounded-md"
              >Data Final</span>
            </div>
            <div className="w-1/4 flex justify-center">
              <span
                className="bg-blue-900 text-white px-2 rounded-md"
                >Resultado</span>
            </div>
            <div className="w-1/4 flex justify-center">
              <span
                className="bg-blue-900 text-white px-2 rounded-md"
              >Evolução</span>
            </div>
          </div>
          {
            tempData.map((data, index) => (
              <InvestmentCard
                data={data}
                index={index}
                handleDelete={handleDelete}
                setGraphData={setGraphData}
                showEvolution={true}
                showDelete={true}
                key={`${data.length}-${index}`}
              />
            ))
          }
        </div>
      ) }

      { graphData.length > 0 && (
        <GraphModal data={graphData} setGraphData={setGraphData} />
      )}

    </div>
  )
}
