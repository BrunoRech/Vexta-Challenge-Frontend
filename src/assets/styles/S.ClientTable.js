import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    text-align:center;
    border-collapse:collapse;
`;

const TableHeader = styled.th`
    border: 3px solid #dddd;
    height: 50px;
    padding: 2px;
`;

const TableBody = styled.tbody`

`;

const TableRow = styled.tr`
    cursor:pointer;
`;

const TableElement = styled.td`
    border: 3px solid #dddd;
    padding: 5px;
`;

const TableText = styled.span`
    font-size: 18px;
    text-transform: capitalize;
`;

const TableInput = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    font-size: 18px;
    text-align: center;
`;

export { Table, TableInput, TableBody, TableHeader, TableElement, TableRow, TableText };