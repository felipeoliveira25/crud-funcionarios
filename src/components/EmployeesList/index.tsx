import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableHead from '@mui/material/TableHead';


import { StyledTableContainer ,StyledTableCellBody, StyledTableCellHead, TableCellIcons, StyledTableRow, IconEdit, TrashIcon } from './style';


import { useEmployees } from '../../hooks/useEmployees';


export function EmployeesList(){

    const {employess, deleteEmployee} = useEmployees();

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
                    <StyledTableCellHead align='center'>Nome</StyledTableCellHead>
                    <StyledTableCellHead align='center'>Idade</StyledTableCellHead>
                    <StyledTableCellHead align='center'>Cargo</StyledTableCellHead>
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