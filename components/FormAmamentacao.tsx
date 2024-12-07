import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const FormAmamentacao: React.FC = () => {
  const [amamentacao, setAmamentacao] = useState({ tipo: '', inicio: '', fim: '', lado: '', quantidade: '', observacao: '' });

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAmamentacao({ ...amamentacao, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setAmamentacao({ ...amamentacao, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Amamentação:', amamentacao);
  };

  return (
    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h6">Amamentação</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Tipo</InputLabel>
          <Select value={amamentacao.tipo} onChange={handleSelectChange} inputProps={{ name: 'tipo' }}>
            <MenuItem value="Mamadeira">Mamadeira</MenuItem>
            <MenuItem value="Seio">Seio</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Horário de Início"
          type="datetime-local"
          fullWidth
          InputLabelProps={{ shrink: true }}
          margin="normal"
          name="inicio"
          value={amamentacao.inicio}
          onChange={handleTextFieldChange}
        />
        <TextField
          label="Horário de Fim"
          type="datetime-local"
          fullWidth
          InputLabelProps={{ shrink: true }}
          margin="normal"
          name="fim"
          value={amamentacao.fim}
          onChange={handleTextFieldChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Lado do Seio</InputLabel>
          <Select value={amamentacao.lado} onChange={handleSelectChange} inputProps={{ name: 'lado' }}>
            <MenuItem value="Direito">Direito</MenuItem>
            <MenuItem value="Esquerdo">Esquerdo</MenuItem>
            <MenuItem value="Ambos">Ambos</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Quantidade (ml) - Caso Mamadeira"
          type="number"
          fullWidth
          margin="normal"
          name="quantidade"
          value={amamentacao.quantidade}
          onChange={handleTextFieldChange}
        />
        <TextField
          label="Observação"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="observacao"
          value={amamentacao.observacao}
          onChange={handleTextFieldChange}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Adicionar Amamentação
        </Button>
      </CardContent>
    </Card>
  );
};

export default FormAmamentacao;
