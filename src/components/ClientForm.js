import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { BackButton, DeleteButton, SaveButton, Container, ClientInput, InputLabel, CityCombobox, CityOption } from '../assets/styles/S.ClientForm';

export default ({ client, SetFormOpen }) => {

    const [clientData, setClientData] = useState({ ...client });
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const { data } = await api.get('/municipios');
            setCities(data);
        };

        fetchCities();
    }, []);


    const handleSave = async () => {
        if (client) {
            const { data } = await api.put(`/clientes/${client.id}`, { ...clientData });
            return;
        }
        const { data } = await api.post('/clientes', clientData);

    };

    const handleDelete = async () => {
        if (client) {
            await api.delete(`/clientes/${client.id}`);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        const newClient = { ...clientData }
        newClient[name] = value;
        setClientData(newClient);
    }

    return (
        <>
            <BackButton
                onClick={() => SetFormOpen(false)}
            >
                Voltar
            </BackButton>
            <Container>
                <InputLabel>Nome</InputLabel>
                <ClientInput
                    onChange={handleChange}
                    value={clientData ? clientData.nome : ''}
                    name="nome"
                    type="text"
                />
                <InputLabel>Endereco</InputLabel>
                <ClientInput
                    onChange={handleChange}
                    value={clientData ? clientData.endereco : ''}
                    name="endereco"
                    type="text"
                />
                <InputLabel>Cnpj</InputLabel>
                <ClientInput
                    onChange={handleChange}
                    value={clientData ? clientData.cnpj : ''}
                    name="cnpj"
                    type="text"
                />
                <InputLabel>Municipio</InputLabel>
                <CityCombobox
                    onChange={handleChange}
                    name="municipio_id"
                    value={clientData ? clientData.municipio.id : 0}
                >
                    {cities.map(city => (
                        <CityOption key={city.id} value={city.id}>{city.nome} - {city.estado}</CityOption>
                    ))}
                </CityCombobox>
                <DeleteButton
                    onClick={handleDelete}
                >
                    Excluir
                </DeleteButton>
                <SaveButton
                    onClick={handleSave}
                >
                    Salvar
                </SaveButton>
            </Container>
        </>
    );
}