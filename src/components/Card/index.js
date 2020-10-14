import React from 'react';
import { Container, Text } from './style.js';

export default function Card({titulo, imagem, texto}){
    return(
        <Container>
            <img src={imagem} />
            <Text>
                <h1>{titulo}</h1>
                <p>{texto}</p>
            </Text>
            
        </Container>
    );
}