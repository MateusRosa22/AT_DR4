import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Cadastro: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    console.log(`Usuário: ${usuario}, Senha: ${senha}`);
  };

  return (
    <Container>
      <Typography variant="h4">Cadastro</Typography>
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
      <Button variant="contained" color="primary" onClick={handleCadastro}>
        Cadastrar
      </Button>
    </Container>
  );
};

export default Cadastro;
