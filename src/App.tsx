import { useState, useRef } from "react"
import { IFuncionario } from "./interfaces/IFuncionario"
import { ButtonForm, Container, DivInput, Form, InfoUsuario, ItemFuncionario } from "./style";
import GlobalStyle from "./styles/globalStyle";


function App() {

  const [funcionarios, setFuncionarios] = useState<IFuncionario[]>([]);
  const nomeFuncionario = useRef<HTMLInputElement>(null)
  const idadeFuncionario = useRef<HTMLInputElement>(null)
  const cargoFuncionario = useRef<HTMLInputElement>(null)
  const emailFuncionario = useRef<HTMLInputElement>(null)

  const criarFuncionario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(
      nomeFuncionario.current &&
      idadeFuncionario.current &&
      cargoFuncionario.current &&
      emailFuncionario.current
    ){
      const funcionarioNovo: IFuncionario = {
        nome: nomeFuncionario.current.value,
        idade: parseInt(idadeFuncionario.current.value),
        cargo: cargoFuncionario.current.value,
        email: emailFuncionario.current.value
      }

      setFuncionarios([...funcionarios, funcionarioNovo])

       nomeFuncionario.current.value = ''
       idadeFuncionario.current.value = ''
       cargoFuncionario.current.value = ''
       emailFuncionario.current.value = ''
    }
  }
  return (
    <>
    <GlobalStyle/>
    <Container>
      <Form action="" onSubmit={criarFuncionario} >
          <DivInput>
            <label htmlFor="">Nome: </label>
            <input ref={nomeFuncionario} type="text" />
          </DivInput>
          <DivInput>
            <label htmlFor="">Idade: </label>
            <input ref={idadeFuncionario} type="number" />
          </DivInput>
          <DivInput>
            <label htmlFor="">Cargo: </label>
            <input ref={cargoFuncionario} type="text" />
          </DivInput>
          <DivInput>
            <label htmlFor="">Email: </label>
            <input ref={emailFuncionario} type="text" />
          </DivInput>
          <ButtonForm type="submit">Adicionar funcionário</ButtonForm>
        </Form>

        <div>
          {funcionarios.map((func, index) => (
            <InfoUsuario key={index}>
                <tr>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Cargo</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <ItemFuncionario>{func.nome}</ItemFuncionario>
                  <ItemFuncionario>{func.idade}</ItemFuncionario>
                  <ItemFuncionario>{func.cargo}</ItemFuncionario>
                  <ItemFuncionario>{func.email}</ItemFuncionario>
                </tr>
             
              
             
              
            </InfoUsuario>
          ))}
        </div>
    </Container>
      
    </>
  )
}

export default App
