import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import Banner from "./comps/Banner"
import List from "./comps/List"

import getPerson from "network/person"

// import removeDuplications from "utils/removeDuplications"
import classifyMovie from "utils/classifyMovie"

function Cast() {
    const [jobs, setJobs] = useState([])
    const [actingMovie, setActingMovie] = useState([])
    const [categoryMovie, setCategoryMovie] = useState(new Map())
    const location = useLocation()
    const routerState = location.state

    useEffect(() => {
        let mounted = false
        getPerson(routerState.id).then((res) => {
            console.log(res)
            let appointments = res.crew.map((item) => {
                return item.job
            })
            let set = new Set(appointments)
            // 主演电影
            setActingMovie(res.cast)
            // 职位去重
            let results = Array.from(set)
            // 职位
            setJobs(results)
            // 担任职位的电影归类
            let categoryResults = classifyMovie(results, res.crew)
            setCategoryMovie(categoryResults)
        })
        return function cleanup() {
            mounted = false
        }
    }, [routerState.id])

    return (
        <>
            <Banner id={routerState.id} jobs={jobs} />
            {actingMovie ? (
                <List
                    length={actingMovie.length}
                    list={actingMovie.slice(0, 12)}
                    title="ACTOR"
                />
            ) : null}

            {jobs
                ? jobs.map((item) => {
                      if (categoryMovie.size) {
                          return (
                              <List
                                  length={categoryMovie.get(item).length}
                                  list={categoryMovie.get(item).slice(0, 12)}
                                  title={item}
                              />
                          )
                      }
                  })
                : null}
        </>
    )
}

export default Cast
