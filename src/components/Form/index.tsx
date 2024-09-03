import React, {useState} from "react";
import { useEmployees } from "../../hooks/useEmployees";
import { IEmployee } from "../../interfaces/IEmployee";
import { ContainerForm, TitleForm } from "./style";

export function Form(){
    const { addEmployee, editEmployee } = useEmployees();
    const [employeeData, setEmployeeData] = useState<IEmployee>({nome: '', idade: 0, cargo: '', email: ''})

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(employeeData.id) {
            editEmployee(employeeData);
        }else {
            addEmployee(employeeData)
        }
        setEmployeeData({nome: '', idade: 0, cargo: '', email: ''})
    }

    

    return(
        <ContainerForm onSubmit={handleSubmit}>
            <TitleForm variant="body1">Adicionar Funcionário</TitleForm>
            <input 
                type="text"
                placeholder="Nome"
                value={employeeData.nome}
                onChange={(e) => setEmployeeData({...employeeData, nome: e.target.value})}
            />

            <input 
                type="number"
                placeholder="Idade"
                value={employeeData.idade}
                onChange={(e) => setEmployeeData({...employeeData, idade: parseInt(e.target.value)})}
            />

            <input 
                type="text" 
                placeholder="Cargo"
                value={employeeData.cargo}
                onChange={(e) => setEmployeeData({...employeeData, cargo: e.target.value})}
            />

            <input 
                type="email"
                placeholder="Email"
                value={employeeData.email}
                onChange={(e) => setEmployeeData({...employeeData, email: e.target.value})}    
            />

            <button type="submit">Save</button>
        </ContainerForm>
    )
}