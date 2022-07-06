import React, {useState} from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormRegister from './components/form/Form-register';
import Listar from './components/listar/Listar'
import Button from '@material-ui/core/Button';

import './index.css'
function App() {

const [page, setPage] = useState('cadastrar')


const handleClickPage = (opcao) =>{
 
setPage(opcao)
}



  return (
 <>
      <header>

        <h1>Challenge-mc2</h1>
        <nav>
          <ul>
            <li> <Button variant="contained" color="secundary" onClick={() => handleClickPage('cadastrar') }>Cadastrar</Button></li>
            <li> <Button variant="coutlined" color="primary" onClick={() => handleClickPage('listar') }>Listar atividades</Button></li>
          </ul>
        </nav>
      </header>

      <Container maxWidth="sm" style={{marginTop: '5rem'}}>
      {page === 'cadastrar' ? <FormRegister/> : <Listar/>}
      </Container>
   
  

  </>
  )
}

export default App;
