import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Grid, TextField, MenuItem, Select, FormControl, InputLabel, Button, Box } from '@mui/material';

const Home: React.FC = () => {
  const [fraldas, setFraldas] = useState<any[]>([]);
  const [sonos, setSonos] = useState<any[]>([]);
  const [amamentacoes, setAmamentacoes] = useState<any[]>([]);

  useEffect(() => {
    const fraldasStorage = localStorage.getItem('fraldas');
    const sonosStorage = localStorage.getItem('sonos');
    const amamentacoesStorage = localStorage.getItem('amamentacoes');
    if (fraldasStorage) setFraldas(JSON.parse(fraldasStorage));
    if (sonosStorage) setSonos(JSON.parse(sonosStorage));
    if (amamentacoesStorage) setAmamentacoes(JSON.parse(amamentacoesStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem('fraldas', JSON.stringify(fraldas));
  }, [fraldas]);

  useEffect(() => {
    localStorage.setItem('sonos', JSON.stringify(sonos));
  }, [sonos]);

  useEffect(() => {
    localStorage.setItem('amamentacoes', JSON.stringify(amamentacoes));
  }, [amamentacoes]);

  const [fralda, setFralda] = useState({ estado: '', horario: '', observacao: '' });
  const [sono, setSono] = useState({ inicio: '', fim: '', observacao: '' });
  const [amamentacao, setAmamentacao] = useState({ tipo: '', inicio: '', fim: '', lado: '', quantidade: '', observacao: '' });

  const adicionarFralda = () => {
    setFraldas([{ ...fralda, id: Date.now() }, ...fraldas]);
    setFralda({ estado: '', horario: '', observacao: '' });
  };

  const adicionarSono = () => {
    setSonos([{ ...sono, id: Date.now() }, ...sonos]);
    setSono({ inicio: '', fim: '', observacao: '' });
  };

  const adicionarAmamentacao = () => {
    setAmamentacoes([{ ...amamentacao, id: Date.now() }, ...amamentacoes]);
    setAmamentacao({ tipo: '', inicio: '', fim: '', lado: '', quantidade: '', observacao: '' });
  };

  return ( <Container> <Typography variant="h4">Home</Typography> <Link to="/settings"> <Button variant="outlined" color="primary" style={{ marginBottom: '20px' }}> Configurações </Button> </Link> <Typography variant="h6">Nome: Bebê</Typography> <Typography variant="h6">Peso: 3.5 kg</Typography> <Typography variant="h6">Comprimento: 50 cm</Typography> <Grid container spacing={3} style={{ marginTop: '16px' }}> <Grid item xs={12} md={4}> <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}> <CardContent> <Typography variant="h6">Fralda</Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Estado da Fralda</InputLabel>
                <Select value={fralda.estado} onChange={(e) => setFralda({ ...fralda, estado: e.target.value })}>
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
                value={fralda.horario}
                onChange={(e) => setFralda({ ...fralda, horario: e.target.value })}
              />
              <TextField
                label="Observação"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={fralda.observacao}
                onChange={(e) => setFralda({ ...fralda, observacao: e.target.value })}
              />
              <Button variant="contained" color="primary" onClick={adicionarFralda}>
                Adicionar Fralda
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6">Sono</Typography>
              <TextField
                label="Horário de Início"
                type="datetime-local"
                fullWidth
                InputLabelProps={{ shrink: true }}
                margin="normal"
                value={sono.inicio}
                onChange={(e) => setSono({ ...sono, inicio: e.target.value })}
              />
              <TextField
                label="Horário de Fim"
                type="datetime-local"
                fullWidth
                InputLabelProps={{ shrink: true }}
                margin="normal"
                value={sono.fim}
                onChange={(e) => setSono({ ...sono, fim: e.target.value })}
              />
              <TextField
                label="Observação"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={sono.observacao}
                onChange={(e) => setSono({ ...sono, observacao: e.target.value })}
              />
              <Button variant="contained" color="primary" onClick={adicionarSono}>
                Adicionar Sono
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6">Amamentação</Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Tipo</InputLabel>
                <Select value={amamentacao.tipo} onChange={(e) => setAmamentacao({ ...amamentacao, tipo: e.target.value })}>
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
                value={amamentacao.inicio}
                onChange={(e) => setAmamentacao({ ...amamentacao, inicio: e.target.value })}
              />
              <TextField
                label="Horário de Fim"
                type="datetime-local"
                fullWidth
                InputLabelProps={{ shrink: true }}
                margin="normal"
                value={amamentacao.fim}
                onChange={(e) => setAmamentacao({ ...amamentacao, fim: e.target.value })}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Lado do Seio</InputLabel>
                <Select value={amamentacao.lado} onChange={(e) => setAmamentacao({ ...amamentacao, lado: e.target.value })}>
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
                value={amamentacao.quantidade}
                onChange={(e) => setAmamentacao({ ...amamentacao, quantidade: e.target.value })}
              />
              <TextField
                label="Observação"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={amamentacao.observacao}
                onChange={(e) => setAmamentacao({ ...amamentacao, observacao: e.target.value })}
              />
              <Button variant="contained" color="primary" onClick={adicionarAmamentacao}>
                Adicionar Amamentação
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box marginTop="40px">
        <Typography variant="h5">Lista de Fraldas</Typography>
        {fraldas.map((item) => (
          <Card key={item.id} style={{ marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography>Estado: {item.estado}</Typography>
              <Typography>Horário: {item.horario}</Typography>
              <Typography>Observação: {item.observacao}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box marginTop="40px">
        <Typography variant="h5">Lista de Sonos</Typography>
        {sonos.map((item) => (
          <Card key={item.id} style={{ marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography>Início: {item.inicio}</Typography>
              <Typography>Fim: {item.fim}</Typography>
              <Typography>Observação: {item.observacao}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box marginTop="40px">
        <Typography variant="h5">Lista de Amamentações</Typography>
        {amamentacoes.map((item) => (
          <Card key={item.id} style={{ marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography>Tipo: {item.tipo}</Typography>
              <Typography>Início: {item.inicio}</Typography>
              <Typography>Fim: {item.fim}</Typography>
              <Typography>Lado: {item.lado}</Typography>
              <Typography>Quantidade: {item.quantidade}</Typography>
              <Typography>Observação: {item.observacao}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
