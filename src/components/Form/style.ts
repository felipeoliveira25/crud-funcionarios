import styled from "styled-components";

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;
    gap: 0.7rem;

    input{
        outline: none;
        padding: 0.8rem;
        font-family: 'Quicksand', sans-serif;
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
    }
`