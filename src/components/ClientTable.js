import React, { useState, useEffect } from 'react';
import { Table, TableInput, TableHeader, TableElement, TableRow, TableText } from '../assets/styles/S.ClientTable';
import api from '../services/api';

export default ({ handleRowClick }) => {

    const [clients, setClients] = useState([]);
    const [query, setQuery] = useState({
        nome: '',
        endereco: '',
        cnpj: '',
        municipio: '',
    });

    const handleFilter = event => {
        const { name, value } = event.target;
        const newQuery = { ...query };
        newQuery[name] = value;
        setQuery(newQuery);
    }

    const handleOnKeyPressed = async event => {
        if (event.key === 'Enter') {
            const { data } = await api.get('/clientes', {
                params: query
            });
            return setClients(data);
        }
    }

    useEffect(() => {
        const fetchClientes = async () => {
            const { data } = await api.get('/clientes')
            setClients(data);
        }

        fetchClientes();
    }, []);

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <TableHeader>
                            <TableInput
                                placeholder="Filtrar por nome"
                                name="nome"
                                onChange={handleFilter}
                                value={query.nome}
                                onKeyPress={handleOnKeyPressed}
                            />
                        </TableHeader>
                        <TableHeader>
                            <TableInput
                                placeholder="Filtrar por endereco"
                                name="endereco"
                                onChange={handleFilter}
                                value={query.endereco}
                                onKeyPress={handleOnKeyPressed}
                            />
                        </TableHeader>
                        <TableHeader>
                            <TableInput
                                placeholder="Filtrar por cnpj"
                                name="cnpj"
                                onChange={handleFilter}
                                value={query.cnpj}
                                onKeyPress={handleOnKeyPressed}
                            />
                        </TableHeader>
                        <TableHeader>
                            <TableInput
                                placeholder="Filtrar por município"
                                name="municipio"
                                onChange={handleFilter}
                                value={query.municipio}
                                onKeyPress={handleOnKeyPressed}
                            />
                        </TableHeader>
                    </tr>
                    <TableRow>
                        <TableElement
                            colSpan={4}
                            onClick={() => handleRowClick(null)}
                        >
                            <TableText>
                                Adicionar novo Cliente
                            </TableText>
                        </TableElement>
                    </TableRow>
                    {clients.length > 0 ? clients.map((client => (
                        <TableRow key={client.id} onClick={() => handleRowClick(client)}>
                            <TableElement>
                                <TableText>{client.nome}</TableText>
                            </TableElement>
                            <TableElement>
                                <TableText>{client.endereco}</TableText>
                            </TableElement>
                            <TableElement>
                                <TableText>{client.cnpj}</TableText>
                            </TableElement>
                            <TableElement>
                                <TableText>{client.municipio.nome} - {client.municipio.estado}</TableText>
                            </TableElement>
                        </TableRow>
                    ))) : (
                            <TableRow>
                                <TableElement colSpan={4}>
                                    Nenhum resultado foi encontrado!
                                </TableElement>
                            </TableRow>
                        )}
                </tbody>
            </Table>
        </>
    )
}