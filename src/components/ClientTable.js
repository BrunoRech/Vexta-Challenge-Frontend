import React from 'react';
import { Table, TableInput, TableBody, TableHeader, TableElement, TableRow, TableText } from '../assets/styles/S.ClientTable';


export default ({ data, handleRowClick }) => {

    return (
        <>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableHeader>
                            <TableInput
                                placeholder="Filtrar por nome"
                            />
                        </TableHeader>
                        <TableHeader>
                            <TableInput
                                placeholder="Filtrar por endereco"
                            />
                        </TableHeader>
                        <TableHeader>
                            <TableInput
                                placeholder="Filtrar por cnpj"
                            />
                        </TableHeader>
                        <TableHeader>
                            <TableInput
                                placeholder="Filtrar por município/estado"
                            />
                        </TableHeader>
                    </TableRow>
                    {data.map((client => (
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
                    )))}
                </TableBody>
            </Table>
        </>
    )
}