"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import crypto from 'crypto';
import "bootstrap/dist/css/bootstrap.min.css";
import './cadastro.css';

async function hashSenha(senha) {
    const password = senha; // Substitua pela senha que você deseja hashear
    try {
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    } catch (error) {
        console.error('Erro ao hashear a senha:', error);
    }
}

function Cadastro() {
    const [mensagem, setMensagem] = useState('')

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Senha: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        const senhaParaHashear = form.Senha
        const senhaHasheada = await hashSenha(senhaParaHashear)

        const formData = {
            Nome: form.Nome,
            Email: form.Email,
            Senha: senhaHasheada
        }

        try {
            await axios.post('http://localhost:3001/usuarios', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response.data);
                    setMensagem(`${response.data.mensagem}redirecionando para pagina de login!`)
                    window.location.replace("/login");
                })
        } catch (error) {
            console.error('Erro ao enviar:', error);
        }
    };


    return (
        <>
            <div className="lado1 container d-flex justify-content-center align-items-center">
                {/*login */}
                <div className="mt-5">
                    <p className="title">Cadastro</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username" onChange={handleChange}>Nome:</label>
                            <input type="text" name="Nome" placeholder="Seu nome" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="username" onChange={handleChange}>Email:</label>
                            <input type="email" name="Email" placeholder="email@gmail.com" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="username" onChange={handleChange}>Telefone:</label>
                            <input type="text" name="Telefone" placeholder="11 99999-9999" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" name="Senha" placeholder="SuaSenha123" onChange={handleChange} />
                        </div>
                        <div className="forgot">
                            <a rel="noopener noreferrer" href="./login/">
                                Ja tem cadastro ?
                            </a>
                        </div>
                        <button type="submit" className="sign">Cadastra-se</button>
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
export default Cadastro;