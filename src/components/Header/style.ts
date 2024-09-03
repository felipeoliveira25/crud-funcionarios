import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.header`
    width: 100vw;
    padding: 1.5rem;
    background-color: #227B94;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0.8rem;
    color: #16325B;
    

    @media (min-width: ${breakpoints.sm}) {
      font-size: 0.9rem;
    }
    @media (min-width: ${breakpoints.lg}) {
      font-size: 1.1rem;
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