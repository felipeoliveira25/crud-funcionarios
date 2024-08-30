import { useEffect, useState } from "react"
import { IFuncionario } from "./interfaces/IFuncionario"
import {  Container, DivInput, Form, TitleContainer, TitleForm } from "./style";
import GlobalStyle from "./styles/globalStyle";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ButtonAddFunc } from "./components/ButtonAddFunc";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Modal } from "@mui/material";

import axios from "axios";


function App() {

  //States para abrir e fechar o modal que edita um funcionário
  const [openModalEdit, setOpenModalEdit] = useState(false)
  
  const handleCloseEdit = () => setOpenModalEdit(false)

  //States para abrir e fechar o modal que adiciona um novo funcionário
  const [openModalAdd, setOpenModalAdd] = useState(false)
  const handleOpen = () => setOpenModalAdd(true)
  const handleClose = () => setOpenModalAdd(false)

  //States para gerenciar o formulário e a lista de funcionários
  const [funcionarios, setFuncionarios] = useState<IFuncionario[]>([]);
  const [nomeFunc, setNomeFunc] = useState('')
  const [idadeFunc, setIdadeFunc] = useState(0)
  const [cargoFunc, setCargoFunc] = useState('')
  const [emailFunc, setEmailFunc] = useState('')

  //State para gerenciar o funcionário que está sendo editado
  

  useEffect( () => {
    const buscarFuncionarios = async () => {
      try{
        const res = await axios.get('http://localhost:3001/funcionarios')
        setFuncionarios(res.data)
      } catch (e){
        console.log(e)
      }
    }
    buscarFuncionarios()
  }, [])

  const adicionarFuncionario = async(funcioario: IFuncionario) => {
    await axios.post('http://localhost:3001/funcionarios', {
      nome: funcioario.nome,
      idade: funcioario.idade,
      cargo: funcioario.cargo,
      email: funcioario.email
    })
  }


  //função para criar adicionar um novo funcionário à lista
  const criarFuncionario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();//prevenir o evento padrão de uma SPA, que ao enviar um formulário recarrega a página
    const funcionarioNovo: IFuncionario = { //cria um funcionário novo com os os valores vindo dos input e uma criação de id automática
        nome: nomeFunc,
        idade: idadeFunc,
        cargo: cargoFunc,
        email: emailFunc
      }

      adicionarFuncionario(funcionarioNovo)
       setNomeFunc('')
       setIdadeFunc(0)
       setCargoFunc('')
       setEmailFunc('')
       setOpenModalAdd(false) //resetar todos os campos do formulário e fechar o modal
    
  }

  

 

  
  return (
    <>
    <GlobalStyle/>
    <Container>
      <TitleContainer>Lista de Funcionários</TitleContainer>
      <Modal
        open={openModalAdd}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
          <Paper
          elevation={5}
          sx={{
            padding : '3rem 4rem',
            marginBottom: '4rem',
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <TitleForm>Cadastro de Funcionários</TitleForm>
          <Form action="" onSubmit={criarFuncionario} >
              <DivInput>
                <TextField 
                  label = "Nome"
                  id="outlined-required"
                  type="text"
                  value={nomeFunc}
                  onChange={(e) => setNomeFunc(e.target.value)} />
              </DivInput>
              <DivInput>
                <TextField 
                  label = "Idade"
                  id="outlined-required"
                  type="number"
                  value={idadeFunc}
                  onChange={(e) => setIdadeFunc(parseInt(e.target.value))} />
              </DivInput>
              <DivInput>
                <TextField 
                  label = "Cargo"
                  id="outlined-required"
                  type="text"
                  value={cargoFunc}
                  onChange={(e) => setCargoFunc(e.target.value)} />
              </DivInput>
              <DivInput>
                <TextField 
                  label = "Email"
                  id="outlined-required"
                  type="text" 
                  value={emailFunc}
                  onChange={(e) => setEmailFunc(e.target.value)}/>
              </DivInput>
              <Button 
                variant="contained" 
                type="submit"
                sx={{
                  marginTop: '1rem'
                }}>Adicionar funcionário</Button>
            </Form>
        </Paper>
      </Modal>

      <Modal
       open={openModalEdit}
       onClose={handleCloseEdit}
       sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center'
       }}>
          <Paper
           elevation={5}
           sx={{
             padding : '3rem 4rem',
             marginBottom: '4rem',
             marginTop: '2rem',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center'
           }}>
            <TitleForm>Editar Funcionário</TitleForm>
            <Form >
              <DivInput>
                  <TextField 
                    label = "Nome"
                    id="outlined-required"
                    type="text"
                    value={nomeFunc}
                    onChange={(e) => setNomeFunc(e.target.value)} />
                </DivInput>
                <DivInput>
                  <TextField 
                    label = "Idade"
                    id="outlined-required"
                    type="number"
                    value={idadeFunc}
                    onChange={(e) => setIdadeFunc(parseInt(e.target.value))} />
                </DivInput>
                <DivInput>
                  <TextField 
                    label = "Cargo"
                    id="outlined-required"
                    type="text"
                    value={cargoFunc}
                    onChange={(e) => setCargoFunc(e.target.value)} />
                </DivInput>
                <DivInput>
                  <TextField 
                    label = "Email"
                    id="outlined-required"
                    type="text" 
                    value={emailFunc}
                    onChange={(e) => setEmailFunc(e.target.value)}/>
                </DivInput>
                <Button
                  variant="contained" 
                  type="submit"
                  sx={{
                    marginTop: '1rem'
                }}>Salvar edição</Button>
            </Form>
          </Paper>
      </Modal>
     
     

        <TableContainer 
          component={Paper}
          sx={{
            width: '60vw'
          }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Idade</TableCell>
                <TableCell align="center">Cargo</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {funcionarios.map((func) => (
                <TableRow key={func.id}>
                      <TableCell component="th" scope="row">{func.nome}</TableCell>
                      <TableCell align="center">{func.idade}</TableCell>
                      <TableCell align="center">{func.cargo}</TableCell>
                      <TableCell align="center">{func.email}</TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          display: 'flex',
                          gap: '1rem'
                        }}>
                        <DeleteOutlineOutlinedIcon 
                          color="error" 
                          
                          sx={{
                            cursor: 'pointer'
                          }}/>
                        <EditOutlinedIcon 
                          color="primary"
                         
                          sx={{
                            cursor: "pointer"
                          }}/>
                      </TableCell>
                </TableRow>
              ))}
            </TableBody>
            
          </Table>
         
        </TableContainer>
        <ButtonAddFunc onClick={handleOpen}/>
    </Container>
      
    </>
  )
}

export default App
