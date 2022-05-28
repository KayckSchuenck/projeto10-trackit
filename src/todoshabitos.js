import { useState,useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

export default function TodosHabitos(props) {
    const [listaHabitos,setListaHabitos]=useState("")
    useEffect(()=>{
        const promise=axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,props.config)
        promise.then((response)=>setListaHabitos(response.data))
    },[])
    if(listaHabitos.length===0) return (<>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</>)
    else{
        return (
        <>
        {listaHabitos.map(element=>{
            return (
                <Habitos>
                    <Block>
                        <p>{element.name}</p>
                        {element.days}
                    </Block>
                    <ion-icon name="trash-outline"></ion-icon>
                </Habitos>
            )

        })}
        </>
        )
    }
}
const Block=styled.div`
margin-top: 5px;
font-size:20px;
p{
    margin-bottom: 8px;
}
`
const Habitos=styled.div`
background-color: white;
height: 90px;
width: 100%;
border-radius: 5px;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
padding: 10px 10px 15px 15px;
ion-icon{
    font-size: 15px;
}
`