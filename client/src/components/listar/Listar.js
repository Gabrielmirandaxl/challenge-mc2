import React,{useEffect, useState} from "react";

import './Listar.css'
import Axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';




const Listar = () =>{


    const [atividades, setAtividades] = useState([])
    const [alternar, setAlternar] = useState()
        
    const [status, setStatus] = useState('concluido');
    const [name, setName] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [dataFinal, setDataFinal] = useState('')
    const [descricao, setDescricao] = useState('')

    const [open, setOpen] = useState(false);
   
    const openModal = () =>{
      setOpen(true)
    }
    

              
    const currencies = [
      {
        label: 'concluida',
        value: 'concluida'
      },
      {
        label: 'pendente',
        value: 'pendente'
      },
      {
        label: 'cancelada',
        value: 'cancelada'
      },
    
    ];



    
  const fetchData = () =>{
  Axios.get("http://localhost:8080/api/atividades")
  .then((response) => setAtividades(response.data) )
}

  const switchData = async () =>{
    !alternar ? setName('')  :  setName(alternar.nome)
    !alternar ? setDescricao('') : setDescricao(alternar.descricao)
    !alternar ? setDataInicio('') : setDataInicio(alternar.datainicio)
    !alternar ? setDataFinal('') : setDataFinal(alternar.datafinal)
  }

    const editar = async () =>{

      const data = {
      id: alternar.id,
      nome: name,
      descricao: descricao,
      datainicio: dataInicio,
      datafinal: dataFinal,

      }

      Axios.put(`http://localhost:8080/api/atividades/${data.id}`, data)
      fetchData()
      
    }

    const excluir = async (data) =>{
        Axios.delete(`http://localhost:8080/api/atividades/${data.id}`)
       fetchData() 
    }



  useEffect(() =>{
      fetchData()
   }, [])

   

  useEffect(() =>{
    switchData()
 }, [alternar])

   

   console.log(atividades)


   const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return(
    
    <>



      <div>

          <div>
                   
                   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Descrição</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Data Inicio</StyledTableCell>
            <StyledTableCell align="right">Data Final</StyledTableCell>
            <StyledTableCell align="right">Ações</StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            {atividades.map((item) =>(
            
               <>
            <StyledTableRow key={item.id}>
              <StyledTableCell align="right">{item.nome}</StyledTableCell>
              <StyledTableCell align="right">{item.descricao}</StyledTableCell>
              <StyledTableCell align="right">{item.status}</StyledTableCell>
              <StyledTableCell align="right">{item.datainicio}</StyledTableCell>
              <StyledTableCell align="right">{item.datafinal}</StyledTableCell>
              <StyledTableCell align="right"> 
              <BsFillPencilFill
              onClick={ () => {
                setAlternar(item)
                openModal()
              }}
              /> </StyledTableCell>
            <StyledTableCell align="right">  
            <BsFillTrashFill
            onClick={() => {
              
              excluir(item)
            }}
            /> 
            </StyledTableCell>
            </StyledTableRow>
            </>
           
           
        ))}
         
        </TableBody>
      </Table>
    </TableContainer>
                     
          </div>
           
      </div>

      { open ? (

        <div style={{marginTop: '3rem'}}>
          
          <TextField 
            id="standard-basic" 
            label="Username" 
            name="username"
            className="username"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <TextField
            id="date"
            label="Data-inicio"
            type="date"
            name="datainicio"
            defaultValue="2017-05-24"
            onChange={(e) => setDataInicio(e.target.value)}
            value={dataInicio}
            InputLabelProps={{
              shrink: true,
            }}
            />

            <TextField
            id="date"
            label="Data-final"
            type="date"
            name="datafinal"
            defaultValue="2017-05-24"
            onChange={(e) => setDataFinal(e.target.value)}
            value={dataFinal}
            InputLabelProps={{
              shrink: true,
            }}
            />

              <TextField
              id="standard-select-currency"
              select
              label="Status"
              name="statusatv"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="status"
             
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="outlined-multiline-static"
              label="Descrição"
              multiline
              name="descricao"
              rows={7}
              onChange={(e) => setDescricao(e.target.value)}
              value={descricao}
              variant="outlined"
            />

                <div className="button">
                  <Button variant="contained" color="primary" onClick={() => {
                     editar() 
                     fetchData()
                  }
                     }>
                      Editar</Button>
                </div>
        </div>

      ) : null }

  </>

  )
}

export default Listar