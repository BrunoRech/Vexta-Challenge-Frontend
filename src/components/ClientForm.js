import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { BackButton, DeleteButton, SaveButton, Container, ClientInput, InputLabel, CityCombobox, CityOption } from '../assets/styles/S.ClientForm';

export default ({ client, SetFormOpen }) => {

    const [clientData, setClientData] = useState({ ...client });
    const [cities, setCities] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCities = async () => {
            const { data } = await api.get('/municipios');
            setCities(data);
        };

        fetchCities();
    }, []);


    const handleSave = async () => {
        let response;
        setLoading(true);
        if (client) {
            response = await api.put(`/clientes/${client.id}`, { ...clientData });
        } else {
            response = await api.post('/clientes', clientData);
        }
        const { error } = response.data;
        if (error) {
            setLoading(false);
            return toast.error(error);
        }
        setLoading(false);
        SetFormOpen(false);
        return toast.success('Cliente salvo com sucesso');

    };

    const handleDelete = async () => {
        setLoading(true);
        if (client) {
            await api.delete(`/clientes/${client.id}`);
            setLoading(false);
            SetFormOpen(false);
            return toast.success('Cliente deletado com sucesso');
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
            <Container>
                <BackButton
                    onClick={() => SetFormOpen(false)}
                    disabled={isLoading}
                    >
                    Voltar
            </BackButton>
                    <InputLabel>Nome</InputLabel>
                    <ClientInput
                    disabled={isLoading}
                    onChange={handleChange}
                    value={clientData ? clientData.nome : ''}
                    name="nome"
                    type="text"
                    />
                    <InputLabel>Endereco</InputLabel>
                    <ClientInput
                    disabled={isLoading}
                    onChange={handleChange}
                    value={clientData ? clientData.endereco : ''}
                    name="endereco"
                    type="text"
                    />
                    <InputLabel>Cnpj</InputLabel>
                    <ClientInput
                    disabled={isLoading}
                    onChange={handleChange}
                    value={clientData ? clientData.cnpj : ''}
                    name="cnpj"
                    type="text"
                    />
                    <InputLabel>Municipio</InputLabel>
                    <CityCombobox
                        disabled={isLoading}
                        onChange={handleChange}
                        name="municipio_id"
                        value={clientData.municipio_id ? clientData.municipio_id : ''}
                    >
                        {cities.map(city => (
                            <CityOption key={city.id} value={city.id}>{city.nome} - {city.estado}</CityOption>
                        ))}
                    </CityCombobox>
                <DeleteButton
                    onClick={handleDelete}
                    disabled={isLoading}
                >
                    Excluir
                </DeleteButton>
                <SaveButton
                    onClick={handleSave}
                    disabled={isLoading}
                >
                    Salvar
                </SaveButton>
            </Container>
        </>
    );
}