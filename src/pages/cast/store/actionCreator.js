// 获取人物基本信息
import getPeople from "network/people"
// 获取人物相关电影信息
import getPerson from "network/person"

import {
    ADD_PERSONALITYINFORMATION,
    ADD_CASTMOVIE,
    ADD_CREWMOVIE,
    ADD_APPOINTMENTS,
    // ADD_PERSONID,
} from "./constants"

// export const addPersonId = (id) => ({
//     type: ADD_PERSONID,
//     id,
// })

// 添加人物基本信息
export const addPersonalityInformationAction = (info) => ({
    type: ADD_PERSONALITYINFORMATION,
    info,
})

// 添加出演电影
export const addCastMovieAction = (castMovie) => ({
    type: ADD_CASTMOVIE,
    castMovie,
})

// 添加职员电影
export const addCrewMovieAction = (crewMovie) => ({
    type: ADD_CREWMOVIE,
    crewMovie,
})

// 添加影视职位
export const addAppointments = (jobs) => ({
    type: ADD_APPOINTMENTS,
    jobs,
})

// 获取人物基本信息
export const getPeopleInformationAction = (id) => {
    return (dispatch) => {
        getPeople(id)
            .then((res) => {
                dispatch(addPersonalityInformationAction(res))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

// 获取人物相关影视信息
export const getMoviesAction = (id) => {
    return (dispatch) => {
        getPerson(id)
            .then((res) => {
                if (res.crew) {
                    // 职位去重
                    let crewMovie = {}
                    res.crew.forEach((item) => {
                        if (crewMovie.hasOwnProperty(item.job)) {
                            crewMovie[item.job].push(item)
                        } else {
                            crewMovie[item.job] = [item]
                        }
                    })
                    dispatch(addCrewMovieAction(crewMovie))
                }
                dispatch(addCastMovieAction(res.cast))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
