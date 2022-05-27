import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './assets/reset.css'
import './assets/style.css'
import TelaLogin from './telalogin';
import TelaCadastro from './telacadastro'
import UserContext from './usercontext';
import TelaHoje from './telahoje'
import { useState } from 'react/';

function App(){
    const [usuario,setUsuario]=useState({})
    return(
        <UserContext.Provider value={{usuario,setUsuario}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/hoje" element={<TelaHoje />}/>
                {/*  <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/historico" element={<TelaHistorico />}/> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}



ReactDOM.render(
    <App />, document.querySelector('.root')
  );
