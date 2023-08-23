import React from "react";
import Carousel from "better-react-carousel";
import './Carousel.css';
import cities from './citiesnight.json'


const Galery = () => {
  return (
    <Carousel cols={2} rows={2} gap={10} loop>
      <Carousel.Item>
          {cities.map((image, Index) => {
            return
            <div key={Index}>
                <img src={cities.image} alt={cities.city}/>
                <h1>{cities.city}</h1>
                <h2>{cities.country}</h2>
            </div>})
          }  
      </Carousel.Item>
    </Carousel>
  )
}

export default Galery 


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