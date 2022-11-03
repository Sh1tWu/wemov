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

export const ListWrap = styled.div`
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Item = styled.div`
    box-sizing: content-box;
    width: 365px;
    height: 208px;
    /* padding: 0 20px; */
    /* margin:0 */
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
