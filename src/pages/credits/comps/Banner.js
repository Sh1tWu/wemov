import React, { useState, useEffect, memo } from "react"
import { useErrorHandler } from "react-error-boundary"

import getBackground from "network/background"
import { getMovie } from "network/movie"

import IMGBASEURL from "network/IMAGEURL"

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
    const handleError = useErrorHandler()

    useEffect(async () => {
        await Promise.all([
            getMovie(id)
                .then((res) => {
                    return res.title
                })
                .catch((err) => {
                    handleError(err)
                }),
            getBackground(id)
                .then((res) => {
                    return res.backdrops[0].file_path
                })
                .catch((err) => {
                    handleError(err)
                }),
        ])
            .then((res) => {
                console.log(res)
                if (res[0]) setName(res[0])
                if (res[1]) setBackground(res[1])
            })
            .catch((err) => {
                handleError(err)
            })
    }, [id])

    return (
        <>
            <Container>
                <Backdrop src={`${IMGBASEURL}${background}`} />
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

export default memo(Banner)
