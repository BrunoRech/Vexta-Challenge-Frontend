import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { ActionButton, ClientForm, ClientInput, InputLabel, CityCombobox, CityOption } from '../assets/styles/S.ClientForm';

export default ({ client }) => {

    const [clientData, setClientData] = useState({ ...client });
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const { data } = await api.get('/municipios');
            setCities(data);
        };

        fetchCities();
    }, []);


    const handleSubmit = () => {

    };

    const handleChange = event => {
        const { name, value } = event.target;
        const newClient = { ...clientData }
        newClient[name] = value;
        setClientData(newClient);
        console.log(newClient)
    }

    return (
        <>
            <ActionButton>Voltar</ActionButton>
            <ClientForm onSubmit={handleSubmit}>
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
                    name="municipio"
                >
                    {cities.map(city => (
                        <CityOption key={city.id} value={city.id}>{city.nome} - {city.estado}</CityOption>
                    ))}
                </CityCombobox>
            </ClientForm>

            <ActionButton>Excluir</ActionButton>
            <ActionButton>Cadastrar</ActionButton>
        </>
    );
}