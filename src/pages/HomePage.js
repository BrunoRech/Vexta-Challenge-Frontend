import React, { useState } from 'react';
import ClientTable from '../components/ClientTable';
import { Container, ImageContainer } from '../assets/styles/S.HomePage';
import ClientForm from '../components/ClientForm';


export default () => {

    
    const [selectedClient, setSelectedClient] = useState({});
    const [openForm, SetFormOpen] = useState(false);

    const handleRowClick = client => {
        setSelectedClient(client);
        SetFormOpen(true);
    };

    return (
        <ImageContainer>
            <Container>
                {
                    openForm ?
                        <ClientForm client={selectedClient} SetFormOpen={SetFormOpen} />
                        :
                        <ClientTable handleRowClick={handleRowClick} />
                }

            </Container>
        </ImageContainer>
    );
}