// import React, {useState} from "react";
// import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
// import './CarouselC.css';


// const CarouselC = ({ citiesnight }) => {
//   const [image, setImage] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setImage(selectedIndex);
//   };

//   const nextImage = () => {
//     setImage(image === citiesnight.length - 1 ? 0 : image + 1)};

//   const prevImage = () => {
//     setImage(image === 0 ? citiesnight.length - 1 : image - 1)};

// return (
//     <div activeIndex={image} onSelect={handleSelect}>
//       <div className="caja">
//         <div className="carrousel">
//         <BsArrowLeftCircleFill className="arrow arrow-letf" onClick={prevImage} />
//         <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextImage}/>
//         <div className="carrousel_card">
          
//         {citiesnight.map((images, index)=>{
//           return (
//           <div key={index} 
//           className={image === index ? "slide" : "slide slide-hidden"}>
//             <img  className="card_image" src={images.image} alt={images.city} />
//             <div className="card_overlay">
//               <h2 className="card_title">{images.city}" - "{images.country}</h2>
//             </div>
            
//           </div>
//           )
//         })}
//         </div>
        
//       <span className="indicator">
//         {citiesnight.map((_, index)=>{
//         return <button key={index} onClick={null} className={image ===index ? "indice" : "indice indice-inactive"}></button>
//         })}
//       </span>
//       </div>
//     </div>         
//     </div>
//   );
// }


// export default CarouselC 





// import Arrow from "../components/Arrow";
// import CardPolaroid from "../components/CardPolaroid";
// import { useState } from "react";

// export default function Carousel({ data }) {
//   let [counter,setCounter] = useState(0)
//   let [counterTo,setCounterTo] = useState(4)
//   function next_slide() {
//     if (data.length <= counterTo) {
//       setCounter(0)
//       setCounterTo(4)
//     } else {
//       setCounter(counter+4)
//       setCounterTo(counterTo+4)
//     }
//     console.log(counter);
//     console.log(counterTo);
//   }
//   function prev_slide() {
//     if (counter <= 0) {
//       setCounter(data.length-4)
//       setCounterTo(data.length)
//     } else {
//       setCounter(counter-4)
//       setCounterTo(counterTo-4)
//     }
//     console.log(counter);
//     console.log(counterTo);
//   }
//   return (
//     <div className="flex justify-center items-center hidden sm:flex">
//       <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide} />
//       <div className="flex w-11/12 flex-wrap justify-center mt-5">
//         {data.slice(counter, counterTo).map((each, index) => (
//           <CardPolaroid
//             key={index}
//             src={each.photo}
//             alt={each.id}
//             text={each.city}
//             id={each.id}
//           />
//         ))}
//       </div>
//       <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
//     </div>
//   );
// }






//RESIDUO

// const Galery = () => {
//   return (
//     <Carousel cols={2} rows={2} gap={10} loop>
//       <Carousel.Item>
//           {cities.map((image, Index) => {
//             return
//             <div key={Index}>
//                 <img src={cities.image} alt={cities.city}/>
//                 <h1>{cities.city}</h1>
//                 <h2>{cities.country}</h2>
//             </div>})
//           }  
//       </Carousel.Item>
//     </Carousel>
//   )
// }


    // <div className="contenedor">
    //   <div className="ciudad">
       

    //   </div>
    // </div>
  

  

  //const [image, setImage] = useState(0);
  // {cities.map((cities, index)=>{
  //   return (
  //   <div key={index} 
  //   className={image === index ? "slide" : "slide slide-hidden"}>
  //     <img  className="card_image" src={cities.image} alt={cities.city} />
  //     <div>
  //       <h2 className="card_title">{cities.city}" - "{cities.country}</h2>
  //     </div>
      
  //   </div>
  //   )
  // })}