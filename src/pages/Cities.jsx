import { useEffect, useRef } from 'react'
import Main from '../layouts/MainL'
import { getAllCities } from '../services/citiesservice.js'
import { useDispatch, useSelector } from 'react-redux'
import { cargarCities, filtrar_cities } from '../redux/actions/citiesActions'
import CardCity from '../components/Card/CardCity'



const Cities = () => {
    
    const inputSearch = useRef (null);
    
    const citiesStore = useSelector ( (store) => store.cities )
    const dispatch = useDispatch ()

    useEffect(()=>{
      getAllCities()
        .then((cities)=>{
          dispatch(cargarCities(cities));
        });
    }, []);

    const handleInput = ()=> {
      // let search = inputSearch.current.value 
      // let query = "?name="
      // getAllCities().then(setCities);
      dispatch(filtrar_cities(inputSearch.current.value));
    };

  return (
    <>
        <Main />
        <section>
          <input type="text" className='form-control col-10' ref={inputSearch} />
          <button className='btn btn-secundary flex-grow-1' onClick={handleInput}>search</button>  
          {citiesStore.length > 0 ? (
            citiesStore.filteredCities.map((city) => <CardCity key={city._id} city={city} /> )
          ) : (
            <h2>No Found</h2>
          )}
        </section>       
    </>
  );
};

export default Cities



// axios(apiURL+'cities')
//         .then(res=>console.log(res.data.data_carousel))
//         .then(res=>setCities(res.data.data_carousel))
//         .catch(err=>console.log(err))
// { {cities.map((each) => (
//           <CardCity
//             key={each._id}
//             src={each.photo}
//             alt={each._id}
//             text={each.city}
//             id={each._id}
//           />
//           Armar
//         ))}}
