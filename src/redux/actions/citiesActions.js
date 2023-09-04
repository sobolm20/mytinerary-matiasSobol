import { createAction } from "@reduxjs/toolkit";

export const cargarCities = createAction( 'cargar_cities', ( cities )=> {
    return{
        payload : cities
    }
})

export const filtrar_cities = createAction( 'filtrar_cities', ( search )=> {
    return{
        payload : {
            inputValue : search
        }
    }
})