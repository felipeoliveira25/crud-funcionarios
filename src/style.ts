import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    
`

export const TitleContainer = styled.h1`
     font-family: 'Quicksand', sans-serif;
     margin: 3rem 0;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`

export const TitleForm = styled.h3`
    margin-bottom: 1.5rem;
    font-family: 'Quicksand', sans-serif;
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    outline: none;

    input{
        outline: none;
    }
`



export const ListaFuncionarios = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-top: 3rem;
`

export const TituloInfo = styled.tr`
    display: flex;
`

export const DivInfos = styled.tr`
    display: flex;
    border: 1px solid black;
`

export const InfoUsuario = styled.table`
    border: 2px solid black;
    cursor: pointer;
    border-collapse: collapse;
    
`
export const ItemFuncionario = styled.td`

border: 1px solid black;
`

