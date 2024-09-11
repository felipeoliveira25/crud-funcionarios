import React, {useEffect, useState} from "react";
import { useEmployees } from "../../hooks/useEmployees";
import { IEmployee } from "../../interfaces/IEmployee";
import { useLocation } from "react-router-dom";
import { ContainerForm, TitleForm } from "./style";

export function Form(){
    const { addEmployee, editEmployee } = useEmployees();
    const [employeeData, setEmployeeData] = useState<IEmployee>({nome: '', idade: 0, cargo: '', email: ''})

   const location = useLocation();
   const employeeFinded : IEmployee = location.state?.employee

   const toEditEmployee = () => {
    if (employeeFinded) {
        setEmployeeData(employeeFinded);
    }
};
    
   useEffect(()=> {
    toEditEmployee()
   }, [location])
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(employeeData.id) {
            editEmployee(employeeData);
            alert("Funcionário atualizado com sucesso")
        }else {
            addEmployee(employeeData)
            alert("Funcionário adicionado com sucesso")
        }
        setEmployeeData({nome: '', idade: 0, cargo: '', email: ''})
    }

    

    return(
        <ContainerForm onSubmit={handleSubmit}>
            <TitleForm variant="body1">
                {employeeFinded ? "Editar Funcionário" : "Adicionar Funcionário"}   
            </TitleForm>
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