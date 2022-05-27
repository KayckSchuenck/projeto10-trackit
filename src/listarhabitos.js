import axios from "axios"
import { useEffect,useState } from "react"
import styled from "styled-components"
import check from './assets/check.svg'

export default function ListarHabitos(props) {
    const [habitos,setHabitos]=useState("")
    console.log(habitos)
    useEffect(()=>{
        const promise=axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,props.config)
        promise.then(response=>{
            setHabitos([{name:"rato",currentSequence:1,highestSequence:2},{name:"rato",currentSequence:1,highestSequence:2},{name:"rato",currentSequence:1,highestSequence:2}])
        })
        promise.catch(()=>alert("aaa"))
    },[])
    return (
        (habitos==="" ? <div>loading</div> : (
            <MeusHabitos>
                {habitos.map(element=>
                    <MeuHabito>
                    <Block>
                        {element.name}
                        <p> Sequência atual: {element.currentSequence} dias
                        <br/> Seu recorde: {element.highestSequence} dias </p>
                    </Block>
                    <img src={check}/>
                    </MeuHabito>
                )}
            </MeusHabitos>
        ))
    )
    
}
const MeusHabitos=styled.div`
display: flex;
flex-direction: column;
color:#666666;
margin-top: 28px;
`

const Block=styled.div`
    font-size: 20px;
    color:#666666;
    height: 70px;
p{
    margin-top: 10px;
    font-size: 13px;
}`

const MeuHabito=styled.div`
border-radius: 5px;
height: 94px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
padding: 0 15px;
img{
    width: 70px;
    height: 70px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
}


`