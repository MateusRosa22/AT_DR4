import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const FormFralda: React.FC = () => {
  const [fralda, setFralda] = useState({ estado: '', horario: '', observacao: '' });

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFralda({ ...fralda, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFralda({ ...fralda, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Fralda:', fralda);
  };

  return (
    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h6">Fralda</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Estado da Fralda</InputLabel>
          <Select value={fralda.estado} onChange={handleSelectChange} inputProps={{ name: 'estado' }}>
            <MenuItem value="Urina">Suja de Urina</MenuItem>
            <MenuItem value="Fezes">Suja de Fezes</MenuItem>
            <MenuItem value="Ambas">Ambas</MenuItem>
            <MenuItem value="Limpa">Limpa</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Horário da Troca"
          type="datetime-local"
          fullWidth
          InputLabelProps={{ shrink: true }}
          margin="normal"
          name="horario"
          value={fralda.horario}
          onChange={handleTextFieldChange}
        />
        <TextField
          label="Observação"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="observacao"
          value={fralda.observacao}
          onChange={handleTextFieldChange}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Adicionar Fralda
        </Button>
      </CardContent>
    </Card>
  );
};

export default FormFralda;
