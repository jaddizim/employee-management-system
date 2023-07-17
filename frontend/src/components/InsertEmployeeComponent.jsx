import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const InsertEmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, emailId }

    if (id) {
      EmployeeService.updateEmployee(id, employee).then((response) => {
        console.log(response.data);
        navigate('/employees');
      }).catch(error => {
        console.log(error);
      })
    } else {
      EmployeeService.insertEmployee(employee).then((response) => {
        console.log(response.data);
        navigate('/employees');
      }).catch(error => {
        console.log(error);
      })
    }
  }

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((response) => {
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setEmailId(response.data.emailId)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {
    if (id) {
      return <h2 className="text-secondary text-center">Alterar Dados</h2>
    } else {
      return <h2 className="text-secondary text-center">Inserir Funcionário</h2>
    }
  }

  return (
    <div>
      <div className='mt-5 container'>
        <div className='p-4 card col-md-6 offset-md-3 offset-md-3 shadow-lg'>
          <div className='m-4'>
            {
              title()
            }
            <div>
              <form>
                <div className='form-group mt-4 mb-2'>
                  <label className='form-label text-secondary fw-bold'> Nome:</label>
                  <input
                    type='text'
                    placeholder='Digite o nome'
                    name='firstName'
                    className='form-control text-secondary'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  >
                  </input>
                </div>

                <div className='form-group mt-4 mb-2'>
                  <label className='form-label text-secondary fw-bold'> Sobrenome:</label>
                  <input
                    type='text'
                    placeholder='Digite o sobrenome'
                    name='lastName'
                    className='form-control text-secondary'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  >
                  </input>
                </div>

                <div className='form-group mt-4 mb-2'>
                  <label className='form-label text-secondary fw-bold'> Email:</label>
                  <input
                    type='email'
                    placeholder='Digite o e-mail'
                    name='emailId'
                    className='form-control text-secondary'
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  >
                  </input>
                </div>

                <div className='d-flex pt-4 pb-4 justify-content-between'>
                  <div>
                    <button className='btn btn-success shadow' onClick={(e) => saveOrUpdateEmployee(e)}>OK</button>
                  </div>
                  <div>
                    <Link to="/employees" className='btn btn-danger shadow'>Cancelar</Link>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsertEmployeeComponent;