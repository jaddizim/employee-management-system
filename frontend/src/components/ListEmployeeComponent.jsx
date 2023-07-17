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
      <h2 className='text-center text-secondary mt-4'>Lista de Funcionários</h2>
      <div>
        <div className='pt-2 pb-4'>
          <Link to="/add-employee" className='btn btn-info text-light shadow'>Inserir funcionário</Link>
        </div>
        <table className='table table-hover text-center rounded shadow-lg overflow-hidden'>
          <thead className='table-secondary'>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(
                employee =>
                  <tr key={employee.id}>
                    <td className='text-secondary align-middle'>{employee.id}</td>
                    <td className='text-secondary align-middle'>{employee.firstName}</td>
                    <td className='text-secondary align-middle'>{employee.lastName}</td>
                    <td className='text-secondary align-middle'>{employee.emailId}</td>
                    <td className='text-secondary align-middle'>
                      <Link className='btn btn-outline-warning btn-sm align-middle' to={`/edit-employee/${employee.id}`}>Atualizar</Link>
                    </td>
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