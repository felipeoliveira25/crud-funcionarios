import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { useNavigate } from 'react-router-dom';
import { IEmployee } from '../../interfaces/IEmployee';
import TableHead from '@mui/material/TableHead';
import { StyledTableContainer ,StyledTableCellBody, StyledTableCellHead, TableCellIcons, StyledTableRow, IconEdit, TrashIcon } from './style';
import { useEmployees } from '../../hooks/useEmployees';


export function EmployeesList(){
    const navigate = useNavigate();
    const {employess, deleteEmployee} = useEmployees();

    const goToEdit = (employee: IEmployee) => {
        navigate(`/cadastro`, {state: {employee}})
        console.log(employee)
    }

    const handleDelete = (id?: string ) => {
        if(id){
            deleteEmployee(id)
        } else {
            console.error("ID is undefined, cannot delete employee")
        }
        
    }
    return(
        <StyledTableContainer >
            <Table>
            <TableHead>
                <StyledTableRow>
                    <StyledTableCellHead align='center'>Name</StyledTableCellHead>
                    <StyledTableCellHead align='center'>Age</StyledTableCellHead>
                    <StyledTableCellHead align='center'>Position</StyledTableCellHead>
                    <StyledTableCellHead align='center'>Email</StyledTableCellHead>
                    <StyledTableCellHead align='center'>Edit</StyledTableCellHead>
                </StyledTableRow>
            </TableHead>
            <TableBody>
                {employess.map((emp) => (
                    <StyledTableRow key={emp.id}>
                        <StyledTableCellBody align='center'>{emp.nome}</StyledTableCellBody>
                        <StyledTableCellBody  align='center'>{emp.idade}</StyledTableCellBody>
                        <StyledTableCellBody  align='center'>{emp.cargo}</StyledTableCellBody>
                        <StyledTableCellBody  align='center'>{emp.email}</StyledTableCellBody>
                        <TableCellIcons align='center'>
                            <IconEdit 
                                color='primary'
                                sx={{cursor: 'pointer'}}
                                onClick={() => goToEdit(emp)}
                            />
                            <TrashIcon 
                                color='error'
                                onClick={() => handleDelete(emp.id)}
                                sx={{cursor: 'pointer'}}
                            />
                        </TableCellIcons>
                    </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </StyledTableContainer>
    )
}