import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    width: 100vw;
    padding: 2rem;
    background-color: #227B94;
    display: flex;
    justify-content: space-around;

    h3{
        color: #16325B;
        font-weight: 600;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color:#F1F3C2;
    font-weight: 700;

    &:hover{
        border-bottom: 2px solid #fff;
    }
`