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

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, emailId }

    EmployeeService.insertEmployee(employee).then((response) => {
      console.log(response.data);
      navigate('/employees');
    }).catch(error => {
      console.log(error);
    })
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
      return <h1 className="text-center">Alterar Dados</h1>
    } else {
      return <h1 className="text-center">Inserir Funcionário</h1>
    }
  }

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <div className="card-body">
            {
              title()
            }
            <br />
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> Nome:</label>
                <input
                  type="text"
                  placeholder="Digite o nome"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Sobrenome:</label>
                <input
                  type="text"
                  placeholder="Digite o sobrenome"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                >
                </input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Email:</label>
                <input
                  type="email"
                  placeholder="Digite o e-mail"
                  name="emailId"
                  className="form-control"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                >
                </input>
              </div>
              <br />
              <div className='row justify-content-between'>
                <div className='col-2'>
                  <button className="btn btn-success" onClick={(e) => saveEmployee(e)}>Inserir Funcionário</button>
                </div>
                <div className='col-2'>
                  <Link to="/employees" className='btn btn-danger'>Cancelar</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsertEmployeeComponent