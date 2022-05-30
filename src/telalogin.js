import logo from "./assets/logo.svg"
import styled from "styled-components"
import { Link,useNavigate } from "react-router-dom"
import { useState,useContext,useEffect } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import { UserContext } from './usercontext';

export default function TelaLogin() {
const {usuario,setUsuario} = useContext(UserContext);
const [email,setEmail]=useState("")
const [password,setpassword]=useState("")
const [loading,setLoading]=useState(false)
const navigate=useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("login")!==null){
            setLoading(true)
            const loginPost=JSON.parse(localStorage.getItem("login"))
            const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",loginPost)
            .then((element)=>{
                setUsuario({...usuario,
                token:element.data.token,
                image:element.data.image
                });
                navigate('/hoje')
            })
            .catch(()=>(alert("Dados não recuperados, faça login novamente"),setLoading(false)))
        }
    },[])

    function clearInputs(){
        setEmail("")
        setpassword("")
    }

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        const loginPost={
            email:email,
            password:password
        }
        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",loginPost)
        promise.then((element)=>{
            setUsuario({...usuario,
            token:element.data.token,
            image:element.data.image
            });
            const dadosSerializados = JSON.stringify(loginPost)
            localStorage.setItem("login",dadosSerializados)
            navigate('/hoje')
        })
        promise.catch(erro=>{
            alert(`Erro ${erro.response.status}, tente novamente`);
            setLoading(false)
            clearInputs()
        })
    }

    return (
        <Tela>
            <img src={logo} />

            <Form $loading={loading} onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="Senha" value={password} onChange={e=>setpassword(e.target.value)} required/>
                {(loading ?
                    (<button>
                    <ThreeDots color="white"></ThreeDots>
                    </button> ) 
                    : 
                    (<button type="submit">Entrar</button>) )}
            </Form>

            <Link to="/cadastro">
            Não tem uma conta? Cadastre-se!
            </Link>

        </Tela>
    )
}

const Tela = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 70px;
width: 100vw;
img{
    width: 180px;
    height: 175px;
}
a{
    color:#53b6ff;
    margin-top: 25px;
}
`
const Form = styled.form`
width: 80%;
display: flex;
flex-direction: column;
font-weight: 400;
input{
    height: 45px;
    color:${props=>(props.$loading ? "#afafaf" : "#dbdbdb")};
    font-size: 20px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    padding: 0 10px;
    pointer-events: ${props=>(props.$loading ? "none" : "auto")};
    background-color:${props=>(props.$loading ? "#F2F2F2" : "white")};
    margin-bottom: 6px;
}
button{
    color: white;
    font-size: 21px;
    border-radius: 5px;
    background-color: #53b6ff;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: ${props=>(props.$loading ? "none" : "auto")};
}
`