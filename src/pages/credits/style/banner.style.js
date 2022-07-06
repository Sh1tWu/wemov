import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 373px;
    overflow-y: hidden;
`
export const Backdrop = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const DescriptionWrap = styled.div``

export const Description = styled.div`
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
`

export const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
`
export const Name = styled.div`
    font-size: 30px;
    font-weight: 600;
`
