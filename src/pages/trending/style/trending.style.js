import styled from "styled-components"

// 常量
import IMGBASEURL from "@/network/IMAGEURL"

export const Banner = styled.div`
    width: 100%;
    height: 500px;
`

export const BannerImg = styled.img.attrs({
    src: `${IMGBASEURL}/i4m14DMv0JG4AOH6sP7Pes87A9x.jpg`,
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const BannerTitle = styled.div`
    width: 100%;
    height: 100px;
    font-size: 30px;
    font-weight: 600;
    padding-left: 400px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
    @media screen and (max-width: 969px) {
        padding-left: 20px;
    }
`

export const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 50px;

    @media screen and (min-width: 1355px) {
        width: 60%;
    }

    @media screen and (max-width: 1354px) {
        width: 80%;
    }
`
