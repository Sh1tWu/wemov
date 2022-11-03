import styled from "styled-components"

export const TapBar = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-bottom: 50px;
    border-top: 1px solid #e6e6e6;
    background-color: white;
`

export const TapBarItem = styled.div`
    flex: 1;
    text-align: center;
    cursor: pointer;
    :hover {
        color: black;
    }
    :active {
        color: blue;
    }
`

export const TapBarItemText = styled.div`
    font-size: 18px;
    color: gray;
`
