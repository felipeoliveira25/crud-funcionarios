import http from '../http'
import { IEmployee } from '../interfaces/IEmployee'

export const employeeService = {
    getAll: async () => {
        const res = await http.get('funcionarios')
        return res.data
    },
    add: async (employee: IEmployee) => {
        const res = await http.post('funcionarios', employee)
        return res.data
    },
    edit: async (employee: IEmployee) => {
        const res = await http.put(`funcionarios/${employee.id}`, employee)
        return res.data
    },
    delete: async (id : string) => {
        await http.delete(`funcionarios/${id}`)
    }
}