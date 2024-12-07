import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const FormSono: React.FC = () => {
  const [sono, setSono] = useState({ inicio: '', fim: '', observacao: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSono({ ...sono, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Sono:', sono);
  };

  return (
    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h6">Sono</Typography>
        <TextField
          label="Horário de Início"
          type="datetime-local"
          fullWidth
          InputLabelProps={{ shrink: true }}
          margin="normal"
          name="inicio"
          value={sono.inicio}
          onChange={handleChange}
        />
        <TextField
          label="Horário de Fim"
          type="datetime-local"
          fullWidth
          InputLabelProps={{ shrink: true }}
          margin="normal"
          name="fim"
          value={sono.fim}
          onChange={handleChange}
        />
        <TextField
          label="Observação"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="observacao"
          value={sono.observacao}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Adicionar Sono
        </Button>
      </CardContent>
    </Card>
  );
};

export default FormSono;
