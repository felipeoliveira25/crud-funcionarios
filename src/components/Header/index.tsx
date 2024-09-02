import { Container, StyledLink } from "./style";


export function Header(){
    return(
        <Container>
            <h3>Lista Funcionários</h3>
            <StyledLink to={'/cadastro'}>Add Employee</StyledLink>
        </Container>
    )
}