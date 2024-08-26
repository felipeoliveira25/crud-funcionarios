import styled from "styled-components";

export const Container = styled.div`
  
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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

export const ButtonForm = styled.button`
    padding: 0.7rem;
    border: none;
    border-radius: 5px;
    margin-top: 1rem;
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