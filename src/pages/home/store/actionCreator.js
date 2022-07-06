import { ADD_RECOMMENDLIST, ADD_IMAGES, ADD_LATESTMOVIE } from "./constant"
import { getRecommendList } from "@/network/recommend"

export const addRecommendListAction = (list) => ({
    type: ADD_RECOMMENDLIST,
    list,
})

export const addImagesPathAction = (path) => ({
    type: ADD_IMAGES,
    path,
})

// export const addLatestMovieAction = (movie) => ({
//     type: ADD_LATESTMOVIE,
//     movie,
// })

export const getRecommendListAction = () => {
    return (dispatch) => {
        getRecommendList().then((res) => {
            // console.log(res)
            console.log(res)
            dispatch(addRecommendListAction(res.results))
        })
    }
}

// export const getLatestMovieAction = () => {
//     return (dispatch) => {
//         getLatestMovie().then((res) => {
//             // console.log(res)
//             dispatch(addLatestMovieAction(res))
//         })
//     }
// }
