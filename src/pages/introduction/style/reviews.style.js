import styled from "styled-components"

export const Container = styled.div`
    width: 1510px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 50px;

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
`

export const Title = styled.div`
    font-size: 20px;
`

export const Display = styled.div`
    font-size: 14px;
    cursor: pointer;
`

export const ReviewsQueue = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ReviewsQueueItem = styled.div`
    width: 370px;
    height: 300px;
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: white;
    margin-bottom: 10px;
`

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const AvatarWrap = styled.div`
    width: 40px;
`

export const Avatar = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
    height: 100%;
    background-color: #bfbfbf;
`

export const UserInfoWrap = styled.div`
    margin-left: 20px;
`

export const Username = styled.div`
    font-size: 14px;
    font-weight: 600;
`

export const RatingBar = styled.div`
    margin-top: 10px;
`

export const ContentWrap = styled.div`
    max-height: 180px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
`

export const Content = styled.div`
    font-size: 14px;
    line-height: 22px;
`

export const Date = styled.div`
    font-size: 12px;
    padding-bottom: 10px;
`
