import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

interface IData {
  nome: string
  count?: string
}

const data = [
  {
    nome: "POST-01",
  },
  {
    nome: "POST-02",
  },
  {
    nome: "POST-03",
  },
  {
    nome: "POST-04",
  },
  {
    nome: "POST-05",
  },
  {
    nome: "POST-06",
  },
  {
    nome: "POST-07",
  }
];

const chuckArray = (array: IData[]) => {

  const res = array.reduce((acc: any, _, i) => {

    if (i % 2 === 0) {
      acc.push(array.slice(i, i + 2))
    };
    return acc;

  }, []);

  return res;
};

function App() {
  const [count, setCount] = useState(0)

  const chunk = chuckArray(data);
  // console.log(chunk);

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper container">

      {chunk.map((item: IData[], index: number) => (

        <SwiperSlide className="SLIDE">
          <h1>SLIDE{index}</h1>

          {item.map((item: IData, index: number) => (
            <div className="item">
              {item.nome}
            </div>
          ))}

        </SwiperSlide>

      ))}

    </Swiper>
  )
}

export default App
