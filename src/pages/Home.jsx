import { useState, useEffect } from 'react'
import Main from '../layouts/MainL'
import Carousel from '../components/Carousel/Carousel'
import cities from "../components/Carousel/citiesnight.json";
import axios from 'axios';
import apiURL from '../apiURL.js'


function Home() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  useEffect(
    ()=>{
      axios(apiURL+'cities/carousel')
        .then(res=>setData(res.data.data_carousel))
        .catch(err=>console.log(err))
    }
  )

  return (
    <>
        <Main />
        <Carousel cities={cities} />
        
    </>
  )
}

export default Home