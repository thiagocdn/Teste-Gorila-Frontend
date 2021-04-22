import InvestmentCard from "./InvestmentCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useEffect, useState } from "react";
import Graph from "./Graph";

interface InvestmentDTO {
  date: string,
  unitPrice: number
}

interface GraphModalProps {
  data: InvestmentDTO[],
  setGraphData: Function
}

export default function GraphModal({ data, setGraphData }: GraphModalProps) {
  
  return (
    <div className="fixed px-2 py-4 left-0 top-0 w-screen h-screen bg-white bg-opacity-80 z-50">
      <div className="flex flex-col items-center max-w-2xl m-auto">
        <div className="flex bg-white py-2 px-4 mx-2 rounded-lg shadow-md">
          <span className="text-center font-bold">EVOLUÇÃO GRÁFICA DO INVESTIMENTO</span>
        </div>
        <div className="p-2 sm:my-4 flex justify-end w-full">
          <button
            className="text-sm bg-blue-900 text-white px-2 py-1 rounded-xl"
            onClick={() => setGraphData([])}
          >FECHAR</button>
        </div>
        <div className="bg-white">
          <Graph data={data} />
        </div>

        <div className="hidden sm:flex w-full mt-4">
            <div className="w-1/3 flex justify-center">
              <span
                className="bg-blue-900 text-white px-2 rounded-md"
              >Data Inicial</span>
            </div>
            <div className="w-1/3 flex justify-center">
              <span
                className="bg-blue-900 text-white px-2 rounded-md"
              >Data Final</span>
            </div>
            <div className="w-1/3 flex justify-center">
              <span
                className="bg-blue-900 text-white px-2 rounded-md"
                >Resultado</span>
            </div>
          </div>
        <div className="w-full">
          <InvestmentCard
            data={data}
            index={0}
            handleDelete={() => {}}
            setGraphData={() => {}}
            showEvolution={false}
            showDelete={false}
          />
        </div>
      </div>
    </div>
  )
}