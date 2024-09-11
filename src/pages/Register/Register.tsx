import { Form } from "../../components/Form";
import { ButtonGoBack, Container } from "./style";
import { useNavigate } from "react-router-dom";
//import { useEmployees } from "../../hooks/useEmployees";


export default function Register(){
    //const { employess } = useEmployees();
   
    const navigate = useNavigate()
    return(
        <Container>
            <ButtonGoBack onClick={() => navigate(-1)}> 
                {'< Back'}  
            </ButtonGoBack>
            
            <Form/>
        </Container>
    )
}