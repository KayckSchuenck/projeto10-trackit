import logo from "./assets/logo.svg"
import styled from "styled-components"
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function TelaCadastro() {
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    function clearInputs(){
        return {
            email:'',
            senha:'',
            nome:'',
            foto:''
        }
    }
    const [postForm,setPostForm]=useState(clearInputs)

    function handleForm(e){
        setPostForm({
            ...postForm,
            [e.target.name]:e.target.value
        })
        console.log(postForm)
    }

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        setPostForm(clearInputs)
        const signUpPost={
                email: postForm.email,
                name: postForm.nome,
                image: postForm.foto,
                password: postForm.senha
            }
        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",signUpPost)
        promise.then(()=>navigate('/'))
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
                <input type="email" placeholder="Email" name="email" value={postForm.email} onChange={handleForm} required/>
                <input type="text" placeholder="Senha" name="senha" value={postForm.senha} onChange={handleForm} required/>
                <input type="text" placeholder="Nome" name="nome" value={postForm.nome} onChange={handleForm} required/>
                <input type="url" placeholder="Foto" name="foto" value={postForm.foto} onChange={handleForm} required/>
                {(loading ?
                    (<button>
                    <ThreeDots color="white"></ThreeDots>
                    </button> ) 
                    : 
                    (<button type="submit">Cadastrar</button>) )}
               
            </Form>
            <Link to="/">
            Já tem uma conta? Faça login!
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