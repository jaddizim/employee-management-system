import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center text-light mt-4'>Lista de Funcionários</h2>
            <div>
                <Link to="/add-employee" className='btn btn-primary mt-3 mb-4 border-2 border-info'>Inserir funcionário</Link>
                <table className='table table-hover text-center rounded shadow-lg overflow-hidden'>
                    <thead className='table-secondary'>
                        <tr>
                            <th>Id</th>
                            <th className='text-start'>Nome</th>
                            <th className='text-start'>Sobrenome</th>
                            <th className='text-start'>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td className='text-secondary'>{employee.id}</td>
                                        <td className='text-secondary text-start'>{employee.firstName}</td>
                                        <td className='text-secondary text-start'>{employee.lastName}</td>
                                        <td className='text-secondary text-start'>{employee.emailId}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent;