import {
    ADD_RECOMMENDLIST,
    ADD_IMAGES,
    ADD_LATESTMOVIE,
    ADD_ERROR,
} from "./constant"
import { getRecommendList } from "network/recommend"

export const addRecommendListAction = (list) => ({
    type: ADD_RECOMMENDLIST,
    list,
})

export const addImagesPathAction = (path) => ({
    type: ADD_IMAGES,
    path,
})

export const addErrorAction = (err) => ({
    type: ADD_ERROR,
    err,
})

// export const addLatestMovieAction = (movie) => ({
//     type: ADD_LATESTMOVIE,
//     movie,
// })

export const getRecommendListAction = () => {
    return (dispatch) => {
        getRecommendList()
            .then((res) => {
                if (res) dispatch(addRecommendListAction(res.results))
            })
            .catch((err) => {
                console.log(err)
                throw Error(err)
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
