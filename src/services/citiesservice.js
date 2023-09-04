import axios from "axios";
import apiURL from "../apiURL";


export const getAllCities = async (queryParam="")=> {
    try {
        const response = await axios(apiURL+'cities'+queryParam)
        return response.data.response
    } catch (err) {
        return []
    }

}

// export const getCarousel = async (req, res, next) =>{      
//     try {
//         const all = await City.find({}, 'image city').limit(12)
//         let count = await City.countDocuments()
//         return res.status(200).json({
//             success: true,
//             message: 'cities to show on carousel',
//             city_carousel: all,
//             count
//         })     
//     } catch (err) {
//         success = false;
//         next(err)
//     }
// }