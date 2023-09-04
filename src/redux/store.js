import { configureStore } from "@reduxjs/toolkit";
import { city_carouselReducer } from './reducers/carouselReducer.js'
import { citiesReducer } from './reducers/citiesReducer.js'
import { userReducer } from './reducers/userReducers.js'

export const store = configureStore({
    reducer : {
        city_carousel : city_carouselReducer,
        cities : citiesReducer,
        user : userReducer
    }
})
