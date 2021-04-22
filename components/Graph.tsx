import InvestmentCard from "./InvestmentCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useEffect, useState } from "react";

interface InvestmentDTO {
  date: string,
  unitPrice: number
}

interface GraphProps {
  data: InvestmentDTO[],
}

export default function Graph({ data }: GraphProps) {
  const [dataView, setDataView] = useState([]);

  useEffect(() => {
    let dataViewTemp = [];
    const jump = Math.floor(data.length/20);
    if(jump <= 1) {
      setDataView(data);
    } else {
      for (let i = data.length-1; i > 0; i -= jump) {
        dataViewTemp.unshift(data[i]);
      }
      if(dataViewTemp[0] !== data[0]) {
        dataViewTemp.unshift(data[0]);
      }
      setDataView(dataViewTemp)
    }
  },[data]);


  return (
    <>
    <div className="hidden sm:flex pr-4">
      <LineChart width={600} height={350} data={dataView}>
        <Line type="monotone" dataKey="unitPrice" stroke="#8884d8" />
        <XAxis dataKey="date"  />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
      <div className="sm:hidden w-full pr-4">
        <LineChart width={320} height={320} data={dataView}>
          <Line type="monotone" dataKey="unitPrice" stroke="#8884d8" />
          <XAxis dataKey="date"  />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </>
  )
}