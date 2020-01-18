import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            const { data } = await api.get('/clientes')
            console.log(data);
            setClientes(data);
        }

        fetchClientes();
    }, []);

    return (
        <div>
            ushauhsuhass
        </div>
    );
}