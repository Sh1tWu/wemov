import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    top: 50px;
    z-index: 999;
    width: 350px;

    background-color: white;
`

export const BoardWrap = styled.div`
    padding-left: 10px;
`

export const TitleWrap = styled.div`
    padding-top: 15px;
    padding-bottom: 5px;
    color: #737373;
`

export const Title = styled.span``

export const TitleNumber = styled.span`
    margin-left: 5px;
`

export const BoardItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
        background-color: #e5e5e5;
    }
`

export const BoardItemImgWrap = styled.div`
    width: 50px;
    height: 75px;
`
export const BoardItemInfo = styled.div`
    margin-left: 15px;
    font-size: 15px;
`

export const BoardItemName = styled.div`
    font-weight: 600;
`

export const BoardItemDirector = styled.div`
    color: gray;
`

export const DisplayAll = styled.div`
    width: 100%;
    text-align: center;
    padding: 15px 0;
    font-weight: 600;
    border-top: 1px solid #d1d1d1;
    cursor: pointer;

    :hover {
        background-color: #e5e5e5;
    }
`

// export const Mask = styled.div`
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
// `
