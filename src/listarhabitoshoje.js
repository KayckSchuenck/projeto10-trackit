import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function ListarHabitosHoje(props) {
    const [habitos, setHabitos] = useState("")
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, props.config)
        promise.catch((error) => alert(`Erro ${error.response.status} tente novamente`))
        promise.then((response) => {
            setHabitos(response.data)
            props.setPercentage({
                numHabits: response.data.length,
                doneHabits: response.data.filter((obj) => obj.done === true).length
            })
        })
    }, [])

    if (habitos.length === 0) return (<div>loading</div>)
    else {
        return (
            <>
            {habitos.map(element => {
                return (
                    <MeuHabito key={element.index} done={element.done}>
                        <Block sequence={element.currentSequence} record={element.highestSequence} done={element.done}>
                            <p>{element.name}</p>
                            <br /> Sequência atual: <span>{element.currentSequence} dias</span>
                            <br /> Seu recorde: <span>{element.highestSequence} dias</span>
                        </Block>

                        <ion-icon name="checkbox" onClick={() => {
                            if (element.done) {
                                const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${element.id}/uncheck`, element, props.config);
                                promise.then(() => {
                                    element.done = !element.done;
                                    props.setPercentage((obj) => {
                                        const objeto = {
                                            numHabits: obj.numHabits,
                                            doneHabits: obj.doneHabits - 1
                                        }
                                        return objeto
                                    })
                                })
                                promise.catch((error) => alert(`Erro ${error.response.status}, tente novamente`))
                            } else {
                                const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${element.id}/check`, element, props.config);
                                promise.then(() => {
                                    element.done = !element.done;
                                    props.setPercentage((obj) => {
                                        const objeto = {
                                            numHabits: obj.numHabits,
                                            doneHabits: obj.doneHabits + 1
                                        }
                                        return objeto
                                    })
                                })
                                promise.catch((error) => alert(`Erro ${error.response.status}, tente novamente`))
                             }
                        }}>
                        </ion-icon>
                    </MeuHabito>
                )
            })}
            </>
        )
    }
}

const Block = styled.div`
    font-size: 13px;
    color:#666666;
    height: 70px;
span:nth-child(3){
    font-size: 13px;
    color:${props => props.done ? "#8FC549" : "#666666"};
}
span:nth-child(5){
    font-size: 13px;
    color:${props => props.sequence === props.record ? "#8FC549" : "#666666"};
}
p{
    font-size: 20px;
}`

const MeuHabito = styled.div`
border-radius: 5px;
height: 94px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
padding: 0 15px;
ion-icon{
    width: 70px;
    height: 70px;
    border-radius: 5px;
    color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
}`