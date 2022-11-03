import styled from "styled-components"

export const Component = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    padding-bottom: 50px;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ArrowImgWrap = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const ArrowImg = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
    height: 100%;
`

export const Item = styled.div`
    box-sizing: content-box;
    width: 28px;
    padding: 7px 5px;
    margin: 0 10px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    :hover {
        background-color: white;
    }
`

export const Omitted = styled.div`
    padding: 0 35px;
    color: black;
`
