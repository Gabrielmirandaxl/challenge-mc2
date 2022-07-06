import React, { useState, useEffect } from "react";

import TextField from '@material-ui/core/TextField';
import Axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


import './Form-register.css'
const FormRegister = () =>{


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





const [status, setStatus] = React.useState('concluido');
const [name, setName] = useState('')
const [dataInicio, setDataInicio] = useState('')
const [dataFinal, setDataFinal] = useState('')
const [descricao, setDescricao] = useState('')


 const handleClickRegister =  ()  =>{

 Axios.post("http://localhost:8080/api/atividades", {
  nome: name,
  descricao: descricao ,
  datainicio: dataInicio,
  datafinal: dataFinal,
  status: status,
  
  
 }).then( (response) =>{
    console.log(response)
 })

 }  

 


  return(
    
        <form  noValidate autoComplete="off" className="form">
        
          <div className="atv-data">

              
            <div className="field">
            <TextField 
            id="standard-basic" 
            label="Username" 
            name="username"
            className="username"
            onChange={(e) => setName(e.target.value)}
            />
            </div>


            <div className="field">
            <TextField
            id="date"
            label="Data-inicio"
            type="date"
            name="datainicio"
            defaultValue="2017-05-24"
            onChange={(e) => setDataInicio(e.target.value)}
        
            InputLabelProps={{
              shrink: true,
            }}
            />
            </div>

            
            <div className="field">
            <TextField
            id="date"
            label="Data-final"
            type="date"
            name="datafinal"
            defaultValue="2017-05-24"
            onChange={(e) => setDataFinal(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            />
            </div>

            <div className="field">
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
            
            </div>
            

          </div>

          <div className="descricao">
          <TextField
              id="outlined-multiline-static"
              label="Descrição"
              multiline
              name="descricao"
              rows={7}
              onChange={(e) => setDescricao(e.target.value)}
              
              variant="outlined"
            />
          </div>
      
                <div className="button">
                <Button variant="contained" color="primary" onClick={() => handleClickRegister() }>Register</Button>
                </div>

              
        </form>

  

  )
}

export default FormRegister