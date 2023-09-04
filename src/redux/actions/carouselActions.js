import { createAction } from "@reduxjs/toolkit";

export const cargarSlide = createAction( 'cargar_slide', ( city_carousel )=> {
    return{
        payload : city_carousel
    }
})