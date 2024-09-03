import { Form } from "../../components/Form";
import { ButtonGoBack, Container } from "./style";
import { useNavigate } from "react-router-dom";


export default function Register(){

    const navigate = useNavigate()
    return(
        <Container>
            <ButtonGoBack onClick={() => navigate(-1)}> 
                {'< Voltar'}  
            </ButtonGoBack>
            
            <Form/>
        </Container>
    )
}