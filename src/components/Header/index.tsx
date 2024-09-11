import { Container, StyledLink } from "./style";


export function Header(){
    return(
        <Container>
            <h3>Employees List</h3>
            <StyledLink to={'/cadastro'}>Add Employee</StyledLink>
        </Container>
    )
}