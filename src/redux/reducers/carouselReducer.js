import { createReducer } from "@reduxjs/toolkit";
import { cargarSlide } from "../actions/carouselActions";

const initialState = {
    city_carousel: []
}

export const city_carouselReducer = createReducer ( initialState, ( builder )=> 
    builder
        .addCase( cargarSlide, ( stateActual, action )=>{
            return{
                ...stateActual,
                city_carousel : action.payload
            }
        } )
)