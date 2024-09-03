import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;
    
    
    
`



export const ButtonGoBack = styled.p`
    color: #227B94;
    font-weight: 700;
    position: absolute;
    top: 6.5rem;
    left: 2rem;
    cursor: pointer;

    @media (min-width: ${breakpoints.md}) {
           left: 4rem;
           top: 7rem;
    }

    @media (min-width: ${breakpoints.lg}) {
           left: 5rem;
           top: 7.5rem;
    }
`