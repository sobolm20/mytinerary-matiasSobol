import React, {useState} from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import './Carousel.css';


const CarouselC = ({ citiesnight }) => {
  const [image, setImage] = useState(0);

  const handleSelect = (selectedIndex) => {
    setImage(selectedIndex);
  };

  const nextImage = () => {
    setImage(image === citiesnight.length - 1 ? 0 : image + 1)};

  const prevImage = () => {
    setImage(image === 0 ? citiesnight.length - 1 : image - 1)};

return (
    <div activeIndex={image} onSelect={handleSelect}>
      <div className="caja">
        <div className="carrousel">
        <BsArrowLeftCircleFill className="arrow arrow-letf" onClick={prevImage} />
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextImage}/>
        <div className="carrousel_card">
        {citiesnight.map((images, index)=>{
          return (
          <div key={index} 
          className={image === index ? "slide" : "slide slide-hidden"}>
            <img  className="card_image" src={images.image} alt={images.city} />
            <div className="card_overlay">
              <h2 className="card_title">{images.city}" - "{images.country}</h2>
            </div>
            
          </div>
          )
        })};
        </div>
        
      <span className="indicator">
        {citiesnight.map((_, index)=>{
        return <button key={index} onClick={null} className={image ===index ? "indice" : "indice indice-inactive"}></button>
        })}
      </span>
      </div>
    </div>         
    </div>
  );
}


export default CarouselC 
