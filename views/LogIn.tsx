import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import fakeUser from '../services/FakeUser.json';

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (usuario === fakeUser.usuario && senha === fakeUser.senha) {
      navigate('/home');
      setErro(null);
    } else {
      setErro('Usuário ou senha incorretos');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        fullWidth
      />
      <TextField
        label="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        fullWidth
      />
      {erro && <Alert severity="error">{erro}</Alert>}
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Entrar
      </Button>
    </Container>
  );
};

export default Login;
