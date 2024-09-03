import styled from "styled-components";
import { Typography } from "@mui/material";
import { breakpoints } from "../../styles/breakpoints";

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;

    

    input{
        outline: none;
        padding: 0.8rem;
        font-family: 'Quicksand', sans-serif;

        @media (min-width: ${breakpoints.sm}) {
            padding: 0.8rem;
            width: 15rem;
        
        }
        @media (min-width: ${breakpoints.md}) {
            padding: 0.8rem;
            width: 20rem;
        
        }
    }

    button{
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        padding: 0.5rem 3rem;
        margin-top: 2rem;
        border: none;
        border-radius: 5px;
        background-color: #229799;
        color: #fff;

        @media (min-width: ${breakpoints.sm}) {
            padding: 0.8rem;
            width: 15rem;
        
        }
    }
`

export const TitleForm = styled(Typography)`
    &&{
        padding-bottom: 1.5rem;
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;

        @media (min-width: ${breakpoints.md}) {
          font-size: 1.2rem;
        }

        @media (min-width: ${breakpoints.lg}) {
          font-size: 1.3rem;
        }
        @media (min-width: ${breakpoints.xl}) {
          font-size: 1.4rem;
        }
    }
   
`