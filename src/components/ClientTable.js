import React from 'react';
import { Table, TableBody, TableHeader, TableElement, TableRow, TableText } from '../assets/styles/S.ClientTable';


export default ({ data }) => {

    const handleRowClick = client =>{
        console.log(client)
    };

    return (
        <>
            <Table>
                <TableBody>
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
                        </TableRow>
                    )))}
                </TableBody>
            </Table>
        </>
    )
}