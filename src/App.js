import React from 'react';
import ContentForm from './components/ContentForm';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container>
      <h1>Générateur de Contenus Créatifs</h1>
      <ContentForm />
    </Container>
  );
};

export default App;
