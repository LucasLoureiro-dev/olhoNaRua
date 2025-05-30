"use client"
import axios from "axios";
import Link from "next/link";
import './esqueceuSenha.css';
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    const [mensagem, setMensagem] = useState('')

    const [form, setForm] = useState({
        Email: '',
        Senha: '',
        Cargo: 'Usuario'
    });

    useEffect(() => {
        if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {

        }
        else if (localStorage.getItem("Cargo") == "Usuario" && localStorage.getItem("token") != null) {
            window.location.replace("/perfil");
        }
        else if (localStorage.getItem("Cargo") == "Admin" && localStorage.getItem("token") != null) {
            window.location.replace("/adm");
        }
    }, [])



    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        setMensagem('')
        e.preventDefault();

        if (form.Email == '' && form.Senha == '') {
            setMensagem('Preencha todos os campos do formulario!!!')
        }
        else if (form.Email == '') {
            setMensagem('Preencha seu email!!!')
        }
        else if (form.Senha == '') {
            setMensagem('Preencha sua senha!!!')
        }
        else {
            const formData = {
                Email: form.Email,
                Senha: form.Senha,
                Cargo: form.Cargo
            }

            try {
                await axios.post('http://localhost:3001/auth/login', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((response) => {
                        console.log(response.data);
                        setMensagem(`${response.data.mensagem}!!! mandando você para a pagina de perfil`)
                        localStorage.setItem("token", response.data.token)
                        localStorage.setItem("Email", formData.Email)
                        localStorage.setItem("Senha", formData.Senha)
                        localStorage.setItem("Cargo", formData.Cargo)
                        window.location.replace("/perfil");
                    })
                    .catch((error) => {
                        console.log(error.response.data.mensagem)
                        setMensagem(error.response.data.mensagem)
                    })
            } catch (error) {
                console.error('Erro ao enviar:', error.message);
            }
        }

    };

    return (
        <>
            <div className="lado1 container d-flex justify-content-center align-items-center">
                {/*login */}
                <div className="box-EsqueceuSenha">
                    <img className="cadeado" src="./cadeado.png" alt="" />
                    <p className="title">Esqueceu senha</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="password">Coloque seu email:</label>
                            <input type="password" name="Senha" placeholder="meuEmail@gmail.com" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Coloque sua nova senha:</label>
                            <input type="password" name="Senha" placeholder="SuaSenha123" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Confirme sua nova senha:</label>
                            <input type="password" name="Senha" placeholder="SuaSenha123" onChange={handleChange} />
                        </div>
                        <button type="submit" className="sign Registrar">Registrar</button>
                        <a href="./login/" className="sign Voltar">Voltar</a>
                    </form>

                    <div className="social-message">
                        <div className="line" />
                        <p className="message">{mensagem}</p>
                        <div className="line" />
                    </div>
                </div>
            </div>











        </>
    )
}