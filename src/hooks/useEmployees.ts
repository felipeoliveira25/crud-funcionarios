import { useState, useEffect } from "react";
import { employeeService } from "../services/funcionarioService";
import { IEmployee } from "../interfaces/IEmployee";

export const useEmployees = () => {
    const [employess, setEmployees] = useState<IEmployee[]>([])

    useEffect(() => {
        employeeService.getAll()
        .then(setEmployees)
    }, [])

    const addEmployee = (employee: IEmployee) => {
        employeeService.add(employee)
        .then((newEmployee) => {
            setEmployees((prev) => [...prev, newEmployee])
        })
    }

    const editEmployee = (employee: IEmployee) => {
        employeeService.edit(employee)
        .then((updatedEmployee) => {
            setEmployees((prev) => prev.map((emp) => 
            (emp.id === updatedEmployee.id ? updatedEmployee : emp)))
        })
    }

    const deleteEmployee = (id: string) => {
        employeeService.delete(id)
        .then(() => {
            setEmployees((prev) => prev.filter((emp) => emp.id !== id))
        })
    }

    return { employess, addEmployee, editEmployee, deleteEmployee}
}