import { createReducer } from "@reduxjs/toolkit";
import { cargarCities, filtrar_cities } from "../actions/citiesActions";


const initialState = {
    allCities : [],
    filteredCities : []
}
export const citiesReducer = createReducer ( initialState, ( builder )=> 
    builder
        .addCase( cargarCities, ( stateActual, action )=>{
            // const newState = {...stateActual}
            // newState.allCities = action.payload
            // newState.filteredCities = action.payload
            return{
                ...stateActual,
                allCities : action.payload,
                filteredCities : action.payload
            }
            // ultima 4 lineas es lo mismo que poner return newState directamente
        } )
        .addCase( filtrar_cities, ( stateActual, action )=> {
            const filteredSearch = stateActual.allCities.filter( city => city.name.toLowerCase().includes(action.payload.inputValue))
            let newFilteredCities = filteredSearch
            return {
                ...stateActual,
                filteredCities : newFilteredCities
            }

        })

)