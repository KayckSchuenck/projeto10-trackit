import UserContext from './usercontext';
import ListarHabitos from './listarhabitos';
import { useState,useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function TelaHoje() {
    const {usuario,setUsuario}=useContext(UserContext)
    const percentage = 75;
    const config={
        headers:{
            Authorization: `Bearer ${usuario.token}`
        }
    }
    return(
        <>
        <Header>
           TrackIt <img src={usuario.image}/>
        </Header>
        <Conteudo>
            <span>Dia de hoje</span>
            Nenhum Habito concluido ainda
            <ListarHabitos config={config}/>
        </Conteudo>
        <ProgressBar>
            <CircularProgressbar  styles={{text:{fontSize:18,fill:"white"},trail:{stroke:'#52B6FF'},path:{stroke:'white'}}} value={percentage} text={`Hoje`} />
        </ProgressBar>
        <Footer>
            <Link to="/habitos">
            Hábitos
            </Link>
            <Link to="/historico">
            Histórico
            </Link>
        </Footer>
        </>
    )
}
const Header=styled.header`
width: 100%;
height: 70px;
position: fixed;
top: 0;
left: 0;
padding: 0 18px;
display: flex;
justify-content: space-between;
align-items: center;
font-family:'Playball', cursive;
font-size: 40px;
color: white;
background-color: #126BA5;
box-shadow: 0px 4px 4px 0px #00000026;
img {
width: 50px;
height: 50px;
border-radius: 50%;
}`

const Footer=styled.footer`
position:fixed;
left: 0;
bottom:0;
width: 100%;
height: 70px;
padding: 0 36px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 18px;
background-color: white;
a{
    text-decoration: none;
    color: #52B6FF;
}`

const ProgressBar=styled.div`
position: fixed;
width: 90px;
height: 90px;
left:calc(50% - 45px);
bottom: 10px;
z-index: 1;
border-radius: 50%;
background-color: #52B6FF;
display: flex;
justify-content: center;
align-items: center;
padding: 6px;
`
const Conteudo=styled.div`
margin: 100px 18px;
display: flex;
flex-direction: column;
justify-content: center;
color: #BABABA;
font-size: 18px;
span{
    color:#126BA5;
    font-size: 22px;
}
`
