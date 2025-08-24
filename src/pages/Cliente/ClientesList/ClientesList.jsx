import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

function ClienteList() {
    return (
        <div className="container">
            <Sidebar />
            <div className="content">
                <h1>Lista de Clientes</h1>
            </div>
        </div>
    );
}

export default ClienteList;