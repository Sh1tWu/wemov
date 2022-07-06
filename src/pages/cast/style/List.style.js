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

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 20px;
`

export const Apartment = styled.div`
    font-size: 16px;
`

export const Size = styled.div`
    font-size: 14px;
`

export const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const Item = styled.div`
    width: 365px;
    height: 208px;
    margin-bottom: 20px;
    margin-right: 10px;
`

export const ItemImgWrap = styled.div`
    width: 100%;
`

export const ItemImg = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
`

export const DescriptionWrap = styled.div`
    position: absolute;
`

export const Description = styled.div`
    width: 370px;
    color: white;
    position: relative;
    top: -80px;
    padding: 0 20px 17px;
`

export const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
`

export const Info = styled.div`
    display: flex;
`

export const Character = styled.div`
    font-size: 16px;
    font-weight: 600;
`

export const Date = styled.div`
    font-size: 16px;
    margin-left: 5px;
`
