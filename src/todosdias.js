import styled from "styled-components"
import { useState } from "react";

export default function TodosDias(props) {
    const diasSelecionados=props.diasSelecionados.some((element)=>element===props.index)
    const [selecionado,setSelecionado]=useState(diasSelecionados)
    function select(){
        setSelecionado(!selecionado)
        if(selecionado) {
            props.set(props.days.filter((element)=>element!==props.index))
        }
        else {
            props.set([...props.days,props.index])
        }
    }
    return(
            <Dias selecionado={selecionado} onClick={select}>
                {props.elemento}
            </Dias>
    )
}



const Dias=styled.div`
display: flex;
color:${props=>(props.selecionado ? "white" : "#DBDBDB")};
background-color:${props=>(props.selecionado ? "#DBDBDB" : "white")};
width: 30px;
height: 30px;
font-size: 20px;
border-radius: 5px;
border: 1px solid #D4D4D4;
margin-right: 4px;
align-items: center;
justify-content: center;
`