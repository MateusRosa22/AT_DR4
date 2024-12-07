import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SelectChangeEvent } from '@mui/material/Select';

const Settings: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [nomeBebe, setNomeBebe] = useState('');
  const [pesoBebe, setPesoBebe] = useState('');
  const [comprimentoBebe, setComprimentoBebe] = useState('');
  const [idioma, setIdioma] = useState(i18n.language);

  useEffect(() => {
    const nome = localStorage.getItem('nomeBebe');
    const peso = localStorage.getItem('pesoBebe');
    const comprimento = localStorage.getItem('comprimentoBebe');
    if (nome) setNomeBebe(nome);
    if (peso) setPesoBebe(peso);
    if (comprimento) setComprimentoBebe(comprimento);
  }, []);

  useEffect(() => {
    localStorage.setItem('nomeBebe', nomeBebe);
  }, [nomeBebe]);

  useEffect(() => {
    localStorage.setItem('pesoBebe', pesoBebe);
  }, [pesoBebe]);

  useEffect(() => {
    localStorage.setItem('comprimentoBebe', comprimentoBebe);
  }, [comprimentoBebe]);

  const handleIdiomaChange = (event: SelectChangeEvent<string>) => {
    const novoIdioma = event.target.value as string;
    setIdioma(novoIdioma);
    i18n.changeLanguage(novoIdioma);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4">Configurações</Typography>
      <Link to="/home"> <Button variant="outlined" color="primary" style={{ marginBottom: '20px' }}> Home </Button> </Link>
      <Box marginTop="20px">
        <FormControl fullWidth margin="normal">
          <InputLabel>Idioma</InputLabel>
          <Select value={idioma} onChange={handleIdiomaChange}>
            <MenuItem value="pt">Português</MenuItem>
            <MenuItem value="en">Inglês</MenuItem>
            <MenuItem value="es">Espanhol</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Nome do Bebê"
          fullWidth
          margin="normal"
          value={nomeBebe}
          onChange={(e) => setNomeBebe(e.target.value)}
        />
        <TextField
          label="Peso do Bebê (kg)"
          type="number"
          fullWidth
          margin="normal"
          value={pesoBebe}
          onChange={(e) => setPesoBebe(e.target.value)}
        />
        <TextField
          label="Comprimento do Bebê (cm)"
          type="number"
          fullWidth
          margin="normal"
          value={comprimentoBebe}
          onChange={(e) => setComprimentoBebe(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginTop: '20px' }}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Settings;
