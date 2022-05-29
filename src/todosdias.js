import styled from "styled-components"
import { useState } from "react"

export default function TodosDias(props) {
    const [selecionado,setSelecionado]=useState(false)
    return(
            <Dias selecionado={selecionado} onClick={()=>setSelecionado(!selecionado)}>
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