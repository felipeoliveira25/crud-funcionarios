import axios from 'axios'
import { IEmployee } from '../interfaces/IEmployee'

export const employeeService = {
    getAll: async () => {
        const res = await axios.get('http://localhost:3001/funcionarios')
        return res.data
    },
    add: async (employee: IEmployee) => {
        const res = await axios.post('http://localhost:3001/funcionarios', employee)
        return res.data
    },
    edit: async (employee: IEmployee) => {
        const res = await axios.put(`http://localhost:3001/funcionarios/${employee.id}`, employee)
        return res.data
    },
    delete: async (id : string) => {
        await axios.delete(`http://localhost:3001/funcionarios/${id}`)
    }
}