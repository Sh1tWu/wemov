import styled from "styled-components"

export const Container = styled.article`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    background-color: white;
    transition: transform 1000ms ease;

    @media screen and (max-width: 969px) {
        flex-direction: column;
    }

    &:hover {
        transform: scale(1.1, 1.1);
    }
`
export const LeftPart = styled.div`
    height: 280px;
    cursor: pointer;
    -webkit-user-select: none; /*webkit浏览器*/
    user-select: none;

    @media screen and (min-width: 1350px) {
        flex: 2;
    }
    @media screen and (min-width: 970px) and (max-width: 1354px) {
        flex: 1;
    }
`

export const RightPart = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 280px;
    padding: 20px 0 15px 20px;
    @media screen and (max-width: 969px) {
        margin-top: 25px;
    }
`

export const Image = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const InfoWrap = styled.div`
    position: relative;
`

export const Info = styled.div`
    position: absolute;
    padding-left: 30px;
    margin-bottom: 0;
    top: -260px;
    color: white;
`

export const Title = styled.div`
    font-size: 2rem;
`

export const Date = styled.div`
    font-size: 14px;
`

export const Overview = styled.div`
    height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* overflow: hidden; */
    /*文本不会换行*/
    /* white-space: nowrap; */
    /*当文本溢出包含元素时，以省略号表示超出的文本*/
    /* text-overflow: ellipsis; */

    font-size: 14px;
    padding-right: 15px;
    /* ::after {
        position: relative;
        content: "...";
    } */
`

export const OptionBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: 600;
    margin-top: 10px;
`

export const Vote = styled.span`
    font-size: 16px;
`

export const Jump = styled.div`
    display: flex;
    align-items: center;
    width: 80px;
    font-size: 12px;
    color: rgb(155, 155, 155);
    cursor: pointer;
`

export const Icon = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 12px;
    height: 12px;
`
