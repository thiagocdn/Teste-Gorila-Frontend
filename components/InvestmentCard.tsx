import { BsGraphUp } from "react-icons/bs";

interface InvestmentDTO {
  date: string,
  unitPrice: number
}

interface InvestmentCardProps {
  data: InvestmentDTO[],
  index: number,
  setGraphData: Function,
  handleDelete: Function,
  showDelete: boolean,
  showEvolution: boolean,
}

export default function InvestmentCard({
  data,
  index,
  setGraphData,
  handleDelete,
  showDelete=false,
  showEvolution= false,
}: InvestmentCardProps) {
  return (
    <>
      <div
        className="sm:hidden bg-gray-200 max-w-sm m-auto rounded-xl px-4 py-2 my-4"
        key={`${data.length}-${index}`}
      >
        <div className="flex w-full justify-between items-center">
          <span className="text-sm">Data inicial:</span><span>{data[0].date}</span>
        </div>
        <div className="flex w-full justify-between items-center">
          <span className="text-sm">Data final:</span><span>{data[data.length - 1].date}</span>
        </div>
        <div className="flex w-full justify-between my-1">
          <span className="text-sm">Resultado:</span><span>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(data[data.length - 1].unitPrice)}</span>
        </div>
        {showEvolution && (
          <div className="flex w-full justify-between items-center">
            <span className="text-sm">Evolução:</span>
            <span
              className="flex border-gray-800 border-b items-center"
              onClick={() => {
                console.log(data);
                setGraphData(data)
              }}
            >
              Conferir
              <BsGraphUp className="ml-2" />
            </span>
          </div>
        )}
        {showDelete && (
          <button
            className="bg-red-600 px-2 py-1 text-white rounded-xl mt-2"
            onClick={() => handleDelete(index)}
          >Excluir</button>
        )}
      </div>

      <div className="hidden sm:flex bg-gray-200 my-2 py-2 rounded-full">
          
        <div className={`flex items-center justify-center ${showEvolution ? 'w-1/4' : 'w-1/3'}`}>
          <span>{data[0].date}</span>
        </div>
        <div className={`flex items-center justify-center ${showEvolution ? 'w-1/4' : 'w-1/3'}`}>
          <span>{data[data.length - 1].date}</span>
        </div>
        <div className={`flex items-center justify-center ${showEvolution ? 'w-1/4' : 'w-1/3'}`}>
          <span>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(data[data.length - 1].unitPrice)}</span>
        </div>
        {showEvolution && (
        <div className="flex items-center justify-center w-1/4">
            <span
              className="flex border-gray-800 border-b items-center"
              onClick={() => {
                console.log(data);
                setGraphData(data)
              }}
            >
              Conferir
              <BsGraphUp className="ml-2" />
            </span>
          </div>
        )}
        {showDelete && (
          <div className="flex items-center justify-center w-0 -mr-16">
            <button
              className="bg-red-600 px-2 text-white rounded-full h-8 text-sm"
              onClick={() => handleDelete(index)}
            >X</button>
          </div>
        )}
      </div>
    </>
  )
}