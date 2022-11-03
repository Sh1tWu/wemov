import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 40px 30px 20px;
    margin-bottom: 40px;
`

export const Wrap = styled.div`
    display: flex;
    margin: 0 auto;

    @media screen and (min-width: 1520px) {
        width: 1530px;
    }
    @media screen and (max-width: 1519px) {
        width: 1100px;
    }
    @media screen and (max-width: 1099px) {
        width: 700px;
    }
    @media screen and (max-width: 749px) {
        width: 100%;
        flex-direction: column;
    }
`

export const ProfileImgWrap = styled.div`
    width: 240px;
    margin-right: 30px;
    @media screen and (max-width: 1099px) {
        width: 400px;
    }
    @media screen and (max-width: 749px) {
        width: 100%;
    }
`

export const ProfileImg = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
`

export const InfoWrap = styled.div`
    width: 800px;
    overflow: hidden;
    @media screen and (max-width: 749px) {
        width: 100%;
    }
`

export const Name = styled.div`
    font-size: 30px;
`

export const JobsWrap = styled.div`
    display: flex;
`

export const Jobs = styled.div`
    font-size: 16px;
    margin-right: 10px;
    padding-left: 10px;
    border-left: 1px solid #c8c8c8;
`

export const Introduction = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 20px;
    font-size: 14px;
    line-height: 26px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
`
