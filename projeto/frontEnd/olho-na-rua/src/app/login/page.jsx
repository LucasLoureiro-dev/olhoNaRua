"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

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
            <p><Link href="/">Pagina inicial</Link></p>
            <p><Link href="/cadastro/">Fazer cadastro</Link></p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>Email: <input type="email" name="Email" placeholder="meuEmail@example.com" onChange={handleChange} /></p>
                <p>Senha: <input type="password" name="Senha" placeholder="minhaSenhalegal123" onChange={handleChange} /></p>
                <p>Tipo de login:
                    <select name="Cargo" onChange={handleChange}>
                        <option value="Usuario">Usuário</option>
                        <option value="Admin">Admin</option>
                    </select>
                </p>
                <button type="submit">Fazer login</button>

                <p>{mensagem}</p>
            </form>
        </>
    )
}