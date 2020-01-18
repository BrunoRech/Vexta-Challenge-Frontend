import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    text-align:center;
    border-collapse:collapse;
    background-color:#fff;
    min-height:400px;
`;

const TableHeader = styled.th`
    border: 3px solid #dddd;
    height: 50px;
    padding: 2px;
`;

const TableRow = styled.tr`
    cursor:pointer;
    &:hover{
        background-color: #dbdbdb;
    }
`;

const TableElement = styled.td`
    border: 3px solid #dddd;
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

export { Table, TableInput, TableHeader, TableElement, TableRow, TableText };