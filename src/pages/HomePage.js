import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ClientTable from '../components/ClientTable';
import { Container } from '../assets/styles/S.HomePage';
import ClientForm from '../components/ClientForm';

export default () => {

    const [clientes, setClientes] = useState([]);
    const [selectedClient, setSelectedClient] = useState({});
    const [openForm, SetFormOpen] = useState(true);

    const handleRowClick = client => {
        setSelectedClient(client);
        SetFormOpen(true);
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
            {
                openForm ?
                    <ClientForm client={selectedClient} />
                    :
                    <ClientTable data={clientes} handleRowClick={handleRowClick} />
            }

        </Container>
    );
}