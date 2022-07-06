import styled from "styled-components"

const PopCoverClassNames = `popcover`

export const PopCoverCmp = styled.div`
    z-index: 99;
    position: absolute;
    top: 60px;
    width: 160px;
    background-color: white;
    font-size: 15px;
    box-shadow: 1px 1px 10px #858585;
    cursor: pointer;
    transition: all 2s ease-in-out;
    &::before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-bottom: 10px solid white;
        top: -20px;
        left: 90%;
        margin-left: -20px;
    }

    &.${PopCoverClassNames}-enter {
        opacity: 0;
        transform: translateY(-10px);
    }

    &.${PopCoverClassNames}-enter-active {
        opacity: 1;
        transform: translateY(10px);
        transition: all 500ms ease;
    }

    &.${PopCoverClassNames}-enter-done {
        transform: translateY(10px);
    }

    &.${PopCoverClassNames}-exit {
        opacity: 1;
        transform: translateY(10px);
    }

    &.${PopCoverClassNames}-exit-active {
        opacity: 0;
        transform: translateY(-10px);
        transition: all 500ms ease;
    }

    .wrap {
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 10px;
        div {
            padding-bottom: 3px;
            &:hover {
                color: #858585;
            }
        }
    }
`
