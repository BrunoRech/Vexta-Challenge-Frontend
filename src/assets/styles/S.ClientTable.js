import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    text-align:center;
    border-collapse:collapse;
    background-color:#fff;
`;

const TableHeader = styled.th`
    border: 1px solid #000;
    height: 50px !important;
    padding: 2px;
`;

const Container = styled.div`
    min-height:400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
`;

const TableRow = styled.tr`
    cursor:pointer;
    &:hover{
        background-color: #ebebeb;
    }
`;

const TableElement = styled.td`
    border: 1px solid #000;
    padding: 5px;
    height: 35px;
`;

const TableText = styled.span`
    font-size: 18px;
    text-transform: capitalize;
`;

const TableInput = styled.input`
    width: 100%;
    height: 50px;
    border: 0 ;
    font-size: 18px;
    text-align: center;
    outline:none;
`;

export { Container, Table, TableInput, TableHeader, TableElement, TableRow, TableText };