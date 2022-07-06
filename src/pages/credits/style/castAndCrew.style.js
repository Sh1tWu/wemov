import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
`

export const Item = styled.div`
    width: 180px;
    height: 350px;
    cursor: pointer;
    padding-bottom: 10px;
    margin-bottom: 15px;
    background-color: white;
`

export const ItemImgWrap = styled.div`
    width: 100%;
`

export const ItemImg = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
    height: 100%;
`

export const Info = styled.div`
    width: 100%;
    margin-top: 5px;
    padding-left: 5px;
`

export const Name = styled.div`
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    color: rgb(85, 85, 85);
`

export const Character = styled.div`
    font-size: 12px;
    text-transform: uppercase;
    color: rgb(155, 155, 155);
`
