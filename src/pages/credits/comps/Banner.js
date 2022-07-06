import React, { useState, useEffect } from "react"

import getBackground from "@/network/background"
import { getMovie } from "@/network/movie"

import IMGBASEURL from "@/network/IMAGEURL"

import {
    Container,
    Backdrop,
    DescriptionWrap,
    Description,
    Title,
    Name,
} from "../style/banner.style"

function Banner(props) {
    const { id } = props
    const [background, setBackground] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        const allResults = Promise.all([
            getMovie(id).then((res) => {
                return res.title
            }),
            getBackground(id).then((res) => {
                return res.backdrops[0].file_path
            }),
        ])
        allResults
            .then((res) => {
                if (res[0]) setName(res[0])
                if (res[1]) setBackground(res[1])
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Container>
                <Backdrop src={`${IMGBASEURL}/${background}`} />
                <DescriptionWrap>
                    <Description>
                        <Title>完整演职员表</Title>
                        <Name>{name}</Name>
                    </Description>
                </DescriptionWrap>
            </Container>
        </>
    )
}

export default Banner
