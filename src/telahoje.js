import  { UserContext,PercentageContext } from './usercontext';
import ListarHabitosHoje from './listarhabitoshoje';
import { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function TelaHoje() {
    const {usuario,setUsuario}=useContext(UserContext)
    const {percentageBar,setPercentageBar} = useContext(PercentageContext)
    console.log(percentageBar)
    const percentage=((percentageBar.doneHabits/percentageBar.numHabits)*100).toFixed(0)
    const config={
        headers:{
            Authorization: `Bearer ${usuario.token}`
        }
    }
    return(
        <>
        <header>
           TrackIt <img src={usuario.image}/>
        </header>
        <div className='conteudo'>
            <Container percentage={percentageBar}>
                <span>Dia de hoje</span>
                <p>{(percentageBar.doneHabits>0 ? `${percentage}% dos hábitos concluídos` : `Nenhum hábito concluído ainda`)}</p>
                <MeusHabitos>
                <ListarHabitosHoje config={config} usuario={usuario} setUsuario={setUsuario} setPercentage={setPercentageBar} percentage={percentageBar}/>
                </MeusHabitos>
            </Container>
        </div>
        <ProgressBar>
            <CircularProgressbar  styles={{text:{fontSize:18,fill:"white"},trail:{stroke:'#52B6FF'},path:{stroke:'white'}}} value={percentage} text={`Hoje`} />
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
padding: 6px;`

const Container=styled.div`
color:${props=>props.percentage>0 ? '#8FC549' : '#BABABA'};
`

const MeusHabitos=styled.div`
display: flex;
flex-direction: column;
color:#666666;
margin-top: 28px;
`
