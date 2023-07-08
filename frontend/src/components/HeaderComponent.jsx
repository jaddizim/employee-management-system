import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="header">
                        <div><a href="https://github.com/jaddizim" className='navbar-brand'>Sistema de Gestão de Funcionários</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;