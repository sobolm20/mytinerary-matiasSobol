import React from "react";
import './Carousel.css';
import Arrow from "./Arrow";
// import getCarousel ''
//import Card from '../Card/Card.jsx'


import { useState } from "react";

export default function Carousel({ cities }) {

  // const citiesStore = useSelector ( (store) => store.cities )
  //   const dispatch = useDispatch ()

  //   useEffect(()=>{
  //     getCarousel()
  //       .then((cities)=>{
  //         dispatch(cargarCities(cities));
  //       });
  //   }, []);
  
  
  
  const [counter,setCounter] = useState(0)
  const [counterTo,setCounterTo] = useState(4)
  function next_slide() {
    if (cities.length <= counterTo) {
      setCounter(0)
      setCounterTo(4)
    } else {
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  function prev_slide() {
    if (counter <= 0) {
      setCounter(cities.length-4)
      setCounterTo(cities.length)
    } else {
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  return (
    <div className="flex justify-center items-center sm:flex">
      <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide} />
      <div className="flex w-11/12 flex-wrap justify-center mt-5">
        {/* {cities.slice(counter, counterTo).map((each, index) => {
          <Card
            key={index}
            src={each.image}
            alt={each.id}
            text={each.city}
            id={each._id}
          />
        })} */}
      </div>
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
    </div>
  );
}


