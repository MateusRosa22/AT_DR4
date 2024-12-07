import React from 'react';
import { Container, Typography } from '@mui/material';
import FormFralda from '../components/FormFralda';
import FormAmamentacao from '../components/FormAmamentacao';
import FormSono from '../components/FormSono';

const FormPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">Formulários</Typography>
      <FormFralda />
      <FormAmamentacao />
      <FormSono />
    </Container>
  );
};

export default FormPage;
