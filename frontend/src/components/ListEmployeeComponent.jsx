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
            <h2 className='text-center'>Lista de Funcionários</h2>
            <Link to="/add-employee" className='btn btn-primary mb-2'>Inserir funcionário</Link>
            <div className='row text-center border rounded border-info overflow-hidden'>
                <table className='table table-hover'>
                    <thead className='table-info'>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
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