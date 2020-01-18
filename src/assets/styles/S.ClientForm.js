import styled from 'styled-components';

const ClientInput = styled.input`
    font-size: 20px;
    width:100%;
    height: 40px;
    border-radius: 5px;
    display: block;
    border: solid 1px #ddd;
    margin: 10px 0px 10px 0px;
    padding: 2px;
`;

const ClientForm = styled.form`

`;

const InputLabel = styled.label`
    display:block;
    width: 100%;
    text-align:center;
    font-weight: bold;
    text-transform: capitalize;
`;

const CityCombobox = styled.select`
    width: 100%;
    height: 44px;
    border-radius: 5px;
    display: block;
    border: solid 1px #ddd;
    margin: 10px 0px 30px 0px;
    background-color: #fff;
    font-size:15px;
    text-transform: capitalize;
    
`;

const CityOption = styled.option`
    font-size: 15px;
    text-transform: capitalize;
`;

const BaseButton = styled.button`
    width: 150px;
    height: 50px;
    background-color:#fff;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;

`;

const BackButton = styled(BaseButton)`
    border: 2px solid #42a4ff;
    color: #42a4ff;
    &:hover{
        background-color: #42a4ff;
        color:#fff;
    }
`;
const DeleteButton = styled(BaseButton)`
    border: 2px solid #ff8a42;
    color: #ff8a42;
    &:hover{
        background-color: #ff8a42;
        color:#fff;
    }
`;
const SaveButton = styled(BaseButton)`
    border: 2px solid #74ff42;
    color: #74ff42;
    &:hover{
        background-color: #74ff42;
        color:#fff;
    }
    float:right;
    
`;

const Container = styled.div`
    width:50%;
    margin:auto;
`;

export { Container, ClientInput, BackButton, DeleteButton, SaveButton, ClientForm, InputLabel, CityCombobox, CityOption }