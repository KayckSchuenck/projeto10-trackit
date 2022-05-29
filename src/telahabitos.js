import  { UserContext,PercentageContext } from './usercontext';
import { useContext,useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import plus from './assets/plus.svg'
import TodosHabitos from './todoshabitos';
import axios from "axios"
import TodosDias from './todosdias';

export default function TelaHabitos() {
    const {usuario,setUsuario}=useContext(UserContext)
    const {percentageBar,setPercentageBar} = useContext(PercentageContext)
    const percentage=((percentageBar.doneHabits/percentageBar.numHabits)*100).toFixed(0)
    const [name,setName]=useState("")
    const [days,setDays]=useState("")
    const [salvarHabito,setSalvarHabito]=useState(false)
    const diasSemana=['D','S','T','Q','Q','S','S']
    const config={
        headers:{
            Authorization: `Bearer ${usuario.token}`
        }
    }
    function salvar(){
        const post={
            name:name,
            days:days
        }
    const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",post,config)
    }


    return(
        <>
        <header>
           TrackIt <img src={usuario.image}/>
        </header>
        <div className='conteudo'>
                {(salvarHabito ? (
                    <SalvarHabito>
                        <Block>
                            <input placeholder='nome do habito'/>
                            <Flex2>
                            {diasSemana.map((elemento)=><TodosDias elemento={elemento}/>)}
                            </Flex2>
                        </Block>
                        <Botoes>
                            <button onClick={()=>setSalvarHabito(false)}>Cancelar</button>
                            <button onClick={salvarHabito}>Salvar</button>
                        </Botoes>
                    </SalvarHabito>
                ) : null)}
                <Flex>
                <span>Meus Hábitos</span>
                <img src={plus} onClick={()=>setSalvarHabito(true)}/>
                </Flex>
                <TodosHabitos dias={diasSemana} config={config}/>
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

const SalvarHabito=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: white;
height: 180px;
width: 100%;
padding:18px 16px 0 20px;
margin-bottom: 28px;
color:#DBDBDB;
border-radius: 5px;
input{
    height: 45px;
    font-size: 20px;
    border-radius: 5px;
    padding: 0 10px;
    border: 1px solid #D4D4D4;
    margin-bottom: 8px;
    color:#DBDBDB;
}
input::placeholder{
    color:#DBDBDB;
}
`

const Botoes=styled.div`
display: flex;
align-items: center;
align-self: flex-end;
margin-bottom: 15px;
button:nth-child(1){
    height: 20px;
    color:#52B6FF;
    font-size: 16px;
    margin-right: 22px;
    background-color: white;
}
button:nth-child(2){
    background-color:#52B6FF;
    color: white;
    height: 35px;
    width: 85px;
    border-radius: 5px;
    font-size: 16px;
}
`
const Block=styled.div`
`
const Flex2=styled.div`
display: flex;
`