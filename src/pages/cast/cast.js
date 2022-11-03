import React, { useState, useEffect, memo } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { useLocation } from "react-router-dom"

import Banner from "./comps/Banner"
import List from "./comps/List"

import { getMoviesAction } from "./store/actionCreator"

function Cast() {
    const dispatch = useDispatch()

    const { castMovie, crewMovie } = useSelector(
        (state) => ({
            castMovie: state.people.castMovie,
            crewMovie: state.people.crewMovie,
        }),
        shallowEqual
    )

    // 职位
    const [jobs, setJobs] = useState([])

    // route
    const location = useLocation()
    const { id } = location.state

    // 职位分类
    useEffect(() => {
        const jobsCollection = []
        if (JSON.stringify(crewMovie) !== "{}") {
            for (let item in crewMovie) {
                jobsCollection.push(item)
            }
            setJobs(jobsCollection)
        }
    }, [crewMovie])

    // dispatch人物相关影视信息请求
    useEffect(() => {
        let mounted = true
        dispatch(getMoviesAction(id))
        return function cleanup() {
            mounted = false
        }
    }, [id])

    // 组装List
    const handleList = () => {
        const lists = []
        if (JSON.stringify(crewMovie) !== "{}") {
            for (let item in crewMovie) {
                lists.push(
                    <List
                        key={item}
                        title={item}
                        length={crewMovie[item].length}
                        list={
                            crewMovie[item].length > 12
                                ? crewMovie[item].slice(0, 12)
                                : crewMovie[item]
                        }
                    ></List>
                )
            }
            return lists
        } else {
            return null
        }
    }

    return (
        <>
            <Banner jobs={jobs} />

            {castMovie ? (
                <List
                    length={castMovie.length}
                    list={castMovie.slice(0, 12)}
                    title="Actor"
                />
            ) : null}

            {Object.keys(crewMovie).length ? handleList() : null}
        </>
    )
}

export default memo(Cast)
