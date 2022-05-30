import { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import TodosDias from './todosdias';

export default function TodosHabitos(props) {
    useEffect(()=>{
        props.getHabitos()
    },[])

    function apagarHabito(id){
        const promise=axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,props.config)
        promise.then(()=>{
            props.getHabitos()
            props.atualizarBarra()
        })
        promise.catch((error)=>alert(`Erro ${error.response.status}, tente novamente`))
    }

    if(props.listaHabitos.length===0) return (<span style={{color:"#666666"}}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>)
    else {
        return (
            <>
            {props.listaHabitos.map(element=>{
                return (
                    <Habitos key={element.index}>
                        <Block>
                            <p>{element.name}</p>
                            <Flex>
                                {props.dias.map((elemento,index)=>
                                <TodosDias elemento={elemento} index={index} diasSelecionados={element.days}/>)}
                            </Flex>
                        </Block>
                        <ion-icon name="trash-outline" onClick={()=>apagarHabito(element.id)}></ion-icon>
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
    color: #666666;
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
    cursor: pointer;
}
`
const Flex=styled.div`
display: flex;
`