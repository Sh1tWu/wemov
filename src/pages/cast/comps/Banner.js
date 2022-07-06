import React, { memo, useState, useEffect } from "react"

import {
    Container,
    Wrap,
    ProfileImgWrap,
    ProfileImg,
    InfoWrap,
    Name,
    JobsWrap,
    Jobs,
    Introduction,
} from "../style/Banner.style"

import CustomImg from "@/components/customImg/customImg"

import getPeople from "@/network/people"

import IMGBASEURL from "@/network/IMAGEURL"

const Banner = memo((props) => {
    const { id } = props
    const { jobs } = props
    const [info, setInfo] = useState({})

    useEffect(() => {
        getPeople(id)
            .then((res) => {
                // console.log(res)
                setInfo(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Container>
                <Wrap>
                    <ProfileImgWrap>
                        <ProfileImg src={`${IMGBASEURL}${info.profile_path}`} />
                    </ProfileImgWrap>
                    <InfoWrap>
                        <Name>{info.name}</Name>
                        <JobsWrap>
                            {jobs
                                ? jobs.map((item) => {
                                      return <Jobs>{item}</Jobs>
                                  })
                                : null}
                        </JobsWrap>
                        <Introduction>{info.biography}</Introduction>
                    </InfoWrap>
                </Wrap>
            </Container>
        </>
    )
})

export default Banner
