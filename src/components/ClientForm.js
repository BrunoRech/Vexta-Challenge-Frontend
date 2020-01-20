import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { CnpjButton, CnpjContainer, BackButton, DeleteButton, SaveButton, Container, ClientInput, InputLabel, CityCombobox, CityOption } from '../assets/styles/S.ClientForm';

export default ({ client, SetFormOpen }) => {
    const [clientData, setClientData] = useState(client ? { ...client } : {
        nome: '',
        endereco: '',
        municipio_id: 0,
        cnpj: '',
    });
    const [cities, setCities] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCities = async () => {
            const { data } = await api.get('/municipios');
            setCities(data);
        };

        fetchCities();
    }, []);

    const handleFindCpnj = async () => {
        setLoading(true);
        const cnpj = clientData.cnpj ? clientData.cnpj.replace(/[^\d]+/g, '') : '';
        const { data } = await api.get(`cnpj/find/${cnpj}`);
        const { error } = data;
        if (error) {
            setLoading(false);
            return toast.error(error);
        }
        const { municipio, nome, uf, logradouro } = data;
        const { data: citydata } = await api.post('/municipios', {
            nome: municipio,
            estado: uf,
        });
        const hasCity = cities.every(city => city.id !== citydata.id);
        if(hasCity){
            setCities([...cities, citydata]);
        }
        const { id } = citydata;
        setClientData({
            ...clientData,
            nome,
            endereco: logradouro,
            municipio_id: id,
        });
        setLoading(false);
    };

    const handleSave = async () => {
        let response;
        setLoading(true);
        const newCnpj = clientData.cnpj ? clientData.cnpj.replace(/[^\d]+/g, '') : '';
        setClientData({ ...clientData, cnpj: newCnpj });
        if (client) {
            response = await api.put(`/clientes/${client.id}`, { ...clientData, cnpj: newCnpj });
        } else {
            response = await api.post('/clientes', { ...clientData, cnpj: newCnpj });
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
        if (client) {
            setLoading(true);
            await api.delete(`/clientes/${client.id}`);
            setLoading(false);
            SetFormOpen(false);
            return toast.success('Cliente deletado com sucesso');
        }
        return toast.error('Este cliente ainda não existe na base de dados');
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
                <InputLabel>Cnpj</InputLabel>
                <CnpjContainer>

                    <ClientInput
                        disabled={isLoading || client}
                        onChange={handleChange}
                        value={clientData ? clientData.cnpj : ''}
                        name="cnpj"
                        type="text"
                        placeholder="Apenas números"
                    />
                    <CnpjButton
                        onClick={handleFindCpnj}
                        disabled={isLoading}
                    >
                        Procurar
                    </CnpjButton>
                </CnpjContainer>
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