"use client"
import axios from "axios";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import crypto from 'crypto'

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
                    setMensagem(`${response.data.mensagem}!!! te redirecionando para pagina de login!`)
                    window.location.replace("/login");
                })
        } catch (error) {
            console.error('Erro ao enviar:', error);
        }
    };


    return (
        <div>
            <p><Link href="/">Pagina inicial</Link></p>
            <p><Link href="/login/">Fazer login</Link></p>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <p>Nome: <input type="text" name="Nome" placeholder="Seu nome" onChange={handleChange} /></p>
                <p>Email: <input type="email" name="Email" placeholder="email@example.com" onChange={handleChange} /></p>
                <p>Senha: <input type="password" name="Senha" placeholder="Senhalegal123" onChange={handleChange} /></p>
                <button type="submit">Cadastrar</button>
                <p>{mensagem}</p>
            </form>
        </div>
    )
}
export default Cadastro;