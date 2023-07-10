import React, { useState } from 'react'

const InsertEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId }
        console.log(employee);
    }

    return (
        <div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <h1 className="text-center">Inserir Funcionário</h1>
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
                                <button className="btn btn-success" onClick={(e) => saveEmployee(e)} > Inserir Funcionário</button>
                                <br />
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsertEmployeeComponent