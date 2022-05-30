import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './assets/reset.css'
import './assets/style.css'
import TelaLogin from './telalogin';
import TelaCadastro from './telacadastro'
import {UserContext,PercentageContext} from './usercontext';
import TelaHoje from './telahoje'
import { useState } from 'react/';
import TelaHabitos from './telahabitos';
import TelaHistorico from './telahistorico';

function App(){
    const [usuario,setUsuario]=useState({})
    const [percentageBar,setPercentageBar]=useState({})
    return(
        <UserContext.Provider value={{usuario,setUsuario}}>
            <PercentageContext.Provider value={{percentageBar,setPercentageBar}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TelaLogin />} />
                        <Route path="/cadastro" element={<TelaCadastro />} />
                        <Route path="/hoje" element={<TelaHoje />} />
                        <Route path="/habitos" element={<TelaHabitos />} />
                        <Route path="/historico" element={<TelaHistorico />} />
                    </Routes>
                </BrowserRouter>
            </PercentageContext.Provider>
        </UserContext.Provider>
    )
}



ReactDOM.render(
    <App />, document.querySelector('.root')
  );
