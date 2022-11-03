import React, { memo, useEffect, useState } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { useLocation } from "react-router-dom"

import {
    Container,
    Wrap,
    ProfileImgWrap,
    InfoWrap,
    Name,
    JobsWrap,
    Jobs,
    Introduction,
} from "../style/Banner.style"

import CustomImg from "components/customImg/customImg"

import { getPeopleInformationAction } from "../store/actionCreator"

const Banner = memo((props) => {
    const { jobs } = props
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = location.state
    const { peopleInfo } = useSelector(
        (state) => ({
            peopleInfo: state.people.personalityInformation,
        }),
        shallowEqual
    )

    useEffect(() => {
        let mounted = true
        // 获取人物基本信息
        dispatch(getPeopleInformationAction(id))
        // 清除副作用
        return function cleanup() {
            mounted = false
        }
    }, [id])

    console.log(peopleInfo)

    return (
        <>
            <Container>
                <Wrap>
                    <ProfileImgWrap>
                        <CustomImg
                            src={`${peopleInfo.profile_path}`}
                            type="people"
                        />
                    </ProfileImgWrap>
                    <InfoWrap>
                        <Name>{peopleInfo.name}</Name>
                        <JobsWrap>
                            {jobs
                                ? jobs.slice(0, 5).map((item) => {
                                      return <Jobs key={item}>{item}</Jobs>
                                  })
                                : null}
                        </JobsWrap>
                        <Introduction>{peopleInfo.biography}</Introduction>
                    </InfoWrap>
                </Wrap>
            </Container>
        </>
    )
})

export default Banner
