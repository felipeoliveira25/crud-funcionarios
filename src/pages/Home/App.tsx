import {  Container  } from "./style";
import GlobalStyle from "../../styles/globalStyle";
import { Header } from "../../components/Header";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Header/>
      </Container>
    </>
  )
}

export default App
