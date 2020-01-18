import styled from 'styled-components';
import background from '../images/background.jpeg';

const Container = styled.div`
    width: 80%;
    margin: auto;
    background: none;
    align-items: center;
    
`;

const ImageContainer = styled.div`
    background-image: url(${background});
    background-repeat:no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export { Container, ImageContainer };