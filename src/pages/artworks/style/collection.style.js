import styled from "styled-components"

export const Container = styled.div`
    width: 1510px;
    margin: 0 auto;

    @media screen and (min-width: 1530px) {
        width: 1510px;
    }
    @media screen and (max-width: 1529px) {
        width: 1130px;
    }
    @media screen and (max-width: 1150px) {
        width: 750px;
    }
    @media screen and (max-width: 760px) {
        width: 370px;
    }
`

export const Title = styled.div`
    width: 100%;
    padding: 20px 0;
    text-align: center;
    font-size: 35px;
    font-weight: 600;
    color: rgb(102, 102, 102);
`

export const ListWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const SortSelectorWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 20px;
    font-size: 13px;
    color: #9b9b9b;
    margin-left: auto;
`

export const SortSelector = styled.span`
    text-align: right;
    width: 55px;
    font-weight: 600;
    cursor: pointer;
`

export const SortSelectorArrow = styled.div`
    align-self: center;
    width: 0;
    height: 0;
    margin-left: 5px;
    border: 5px solid transparent;
    border-top: 6px solid gray;
`

export const SortSelectorTable = styled.div`
    position: absolute;
    width: 70px;
    margin-top: 20px;
    text-align: center;
    background-color: white;
    cursor: pointer;
`

export const SortSelectorTableItem = styled.div`
    :hover {
        background-color: gray;
    }
`

export const Item = styled.div`
    width: 365px;
    height: 208px;
    margin-bottom: 20px;
    cursor: pointer;
`

export const ItemImgWrap = styled.div`
    width: 100%;
`

export const DescriptionWrap = styled.div`
    position: absolute;
`

export const Description = styled.div`
    width: 365px;
    color: white;
    position: relative;
    top: -160px;
    padding: 0 20px 17px;
`

export const NameWrap = styled.div`
    position: relative;
    width: 100%;
    height: 120px;
    overflow: hidden;
    word-wrap: no-wrap;
    text-overflow: ellipsis;
`

export const Name = styled.p`
    position: absolute;
    bottom: -30px;
    width: 100%;
    font-size: 25px;
    font-weight: 600;
`

export const Info = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

export const Character = styled.div`
    max-width: 180px;
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
`

export const Date = styled.div`
    font-size: 16px;
    margin-left: 5px;
`
