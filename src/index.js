import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './assets/reset.css'
import './assets/style.css'
import TelaLogin from './telalogin';
import TelaCadastro from './telacadastro'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
               {/* <Route path="/habitos" element={<TelaHabitos />} />
                <Route path="/hoje" element={<TelaHoje />}/>
                <Route path="/historico" element={<TelaHistorico />}/> */}
            </Routes>
        </BrowserRouter>
    )
}



ReactDOM.render(
    <App />, document.querySelector('.root')
  );
