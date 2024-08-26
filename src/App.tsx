import { useState } from "react"
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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Modal } from "@mui/material";
import { v4 as uuidv4} from 'uuid'


function App() {

  //States para abrir e fechar o modal que edita um funcionário
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const handleOpenEdit = () => setOpenModalEdit(true)
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
  const [funcionarioEditando, setFuncionarioEditando] = useState<string | null>(null);


  //função para criar adicionar um novo funcionário à lista
  const criarFuncionario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();//prevenir o evento padrão de uma SPA, que ao enviar um formulário recarrega a página
    const funcionarioNovo: IFuncionario = { //cria um funcionário novo com os os valores vindo dos input e uma criação de id automática
        id: uuidv4(),
        nome: nomeFunc,
        idade: idadeFunc,
        cargo: cargoFunc,
        email: emailFunc
      }

      setFuncionarios([...funcionarios, funcionarioNovo]) //atualiza o array de funcionário, dizendo para manter o funcionários já existentes e adicionar o novo

       setNomeFunc('')
       setIdadeFunc(0)
       setCargoFunc('')
       setEmailFunc('')
       setOpenModalAdd(false) //resetar todos os campos do formulário e fechar o modal
    
  }

  const removerFuncionario = (id: string) => { //função para remover um funcionário pelo id
    setFuncionarios(funcionarios.filter(func => func.id !== id)) //cria um array novo filtrando todos os ids que sejam DIFERENTES do id passado
  }

  const editarFuncionario = (id: string) => { //função para editar um funcionário pelo id
    const funcionarioSelecionado = funcionarios.find(func => func.id === id ) //retorna o funcionário que corresponde ao id passado
    if (funcionarioSelecionado) { // se o funcionário de fato existe...
      setFuncionarioEditando(id); // define o id do funcionário que está sendo editado
      setNomeFunc(funcionarioSelecionado.nome); //e altera todos os campos para estarem com os mesmos valores que o funcionário do id correspondente
      setIdadeFunc(funcionarioSelecionado.idade);
      setCargoFunc(funcionarioSelecionado.cargo);
      setEmailFunc(funcionarioSelecionado.email);
      setOpenModalEdit(true); //abre o modal de editar funcionários
  }
}
const salvarEdicao = (e: React.FormEvent<HTMLFormElement>) => { //função para salvar o usuário que foi editado
  e.preventDefault(); //prevenir o evento padrão da página
  if (funcionarioEditando) { // se de fato existe um funcionário sendo editado...
    // atualiza o funcionário no array
    setFuncionarios(funcionarios.map((func) => //1) vai fazer uma varredura de todos os funcionários presentes no array
      func.id === funcionarioEditando //2) caso o id do funcionário que está sendo editado seja igual ao id que aparecer dos funcionários da lista
        ? { ...func, nome: nomeFunc, idade: idadeFunc, cargo: cargoFunc, email: emailFunc } //3) vai conseguir editar os itens, caso seja true
        : func // 4) se for false, apenas ficará da mesma forma 
    ));
    setFuncionarioEditando(null); // limpa o id do funcionário sendo editado
    handleCloseEdit(); // fecha o modal de edição
  }
};

  
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
            <Form onSubmit={salvarEdicao}>
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
                          onClick={() => removerFuncionario(func.id)}
                          sx={{
                            cursor: 'pointer'
                          }}/>
                        <EditOutlinedIcon 
                          color="primary"
                          onClick={() => editarFuncionario(func.id)}
                          sx={{
                            cursor: "pointer"
                          }}/>
                      </TableCell>
                </TableRow>
              ))}
            </TableBody>
            
          </Table>
         
        </TableContainer>
        <Fab 
          color="primary" 
          size="medium"
          onClick={handleOpen}
          sx={{
            position: 'fixed',
            top: '32rem',
            right: '2rem'
          }}>
            <AddIcon/>
        </Fab>
    </Container>
      
    </>
  )
}

export default App
