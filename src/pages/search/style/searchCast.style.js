import styled from "styled-components"

export const Casts = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    overflow-x: auto;
    @media screen and (min-width: 1530px) {
        width: 1530px;
    }
    @media screen and (max-width: 1529px) {
        width: 1150px;
    }

    @media screen and (max-width: 1149px) {
        width: 80%;
    }
`

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Item = styled.div`
    width: 280px;
    /* @media screen and (max-width: 1529px) {
        width: 250px;
    }
    @media screen and (max-width: 1149px) {
        width: 200px;
    } */
    padding-bottom: 10px;
    margin-bottom: 15px;
    background-color: white;
    cursor: pointer;
`

export const ItemImgWrap = styled.div``

export const ItemImg = styled.div`
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
