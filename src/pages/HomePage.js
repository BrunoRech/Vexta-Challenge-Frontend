import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ClientTable from '../components/ClientTable';
import { Container } from '../assets/styles/S.HomePage';

import ClientForm from '../components/ClientForm';

export default ({history}) => {

    const [clientes, setClientes] = useState([]);

    const handleRowClick = client => {
        history.push('/client-form');
    };

    useEffect(() => {
        const fetchClientes = async () => {
            const { data } = await api.get('/clientes')
            setClientes(data);
        }

        fetchClientes();
    }, []);

    return (
        <Container>
            <ClientTable data={clientes} handleRowClick={handleRowClick}/>
        </Container>
    );
}