import  { UserContext,PercentageContext } from './usercontext';
import { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import plus from './assets/plus.svg'
import TodosHabitos from './todoshabitos';
import { useState } from 'react';
import axios from "axios"

export default function TelaHabitos() {
    const {usuario,setUsuario}=useContext(UserContext)
    const {percentageBar,setPercentageBar} = useContext(PercentageContext)
    const percentage=((percentageBar.doneHabits/percentageBar.numHabits)*100).toFixed(0)
    const [name,setName]=useState("")
    const [days,setDays]=useState("")

    const config={
        headers:{
            Authorization: `Bearer ${usuario.token}`
        }
    }
    function salvarHabito(){
        const post={
            name:name,
            days:days
        }
    const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",post,config)
    }

    function criarHabito(){
        console.log("Aa")
        return (
            <SalvarHabito>
                <input placeholder='nome do habito'/>
                sla oq é
                <button>Cancelar</button>
                <button onClick={salvarHabito}>Salvar</button>
            </SalvarHabito>
        )
    }

    return(
        <>
        <header>
           TrackIt <img src={usuario.image}/>
        </header>
        <div className='conteudo'>
            <Container>
                <Flex>
                <span>Meus Hábitos</span>
                <img src={plus} onClick={criarHabito}/>
                </Flex>
                <TodosHabitos config={config}/>
             </Container>
        </div>
        <ProgressBar>
            <Link to='/hoje'>
            <CircularProgressbar  styles={{text:{fontSize:18,fill:"white"},trail:{stroke:'#52B6FF'},path:{stroke:'white'}}} value={percentage} text={`Hoje`} />
            </Link>
        </ProgressBar>
        <footer>
            <Link to="/habitos">
            Hábitos
            </Link>
            <Link to="/historico">
            Histórico
            </Link>
        </footer>
        </>
    )    
}

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

const Flex=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 28px;
`

const Container=styled.div`
color:#666666;
`

const SalvarHabito=styled.div`
background-color: white;
height: 180px;
width: 100%;
input{
    width: 90%;
    height: 45px;
    font-size: 20px;
    color:#DBDBDB;
    padding: 0 10px;
}
button:nth-child(3){
    height: 20px;
    width: 70px;
    color:#52B6FF;
    font-size: 16px;
}
button:nth-child(5){
    background-color:#52B6FF;
    color: white;
    height: 35px;
    width: 85px;
}
`