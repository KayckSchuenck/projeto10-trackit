import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  { UserContext,PercentageContext } from './usercontext';
import { useContext } from "react"
import styled from "styled-components"

export default function TelaHistorico() {
    const { usuario }=useContext(UserContext)
    const { percentageBar } = useContext(PercentageContext)
    const percentage = ((percentageBar.doneHabits / percentageBar.numHabits) * 100).toFixed(0)
    return (
        <>
            <header>
                TrackIt <img src={usuario.image} />
            </header>
            <div className="conteudo">
                <span>Histórico</span>
                <P>Em breve você poderá ver o histórico dos seus hábitos aqui!</P>
            </div>
            <ProgressBar>
                <Link to='/hoje'>
                    <CircularProgressbar styles={{ text: { fontSize: 18, fill: "white" }, trail: { stroke: '#52B6FF' }, path: { stroke: 'white' } }} value={percentage} text={`Hoje`} />
                </Link>
            </ProgressBar>
            <footer>
                <Link to="/habitos">
                    Hábitos
                </Link>
                <a>
                    Histórico
                </a>
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
const P=styled.p`
color:#666666;
margin-top: 18px;
`