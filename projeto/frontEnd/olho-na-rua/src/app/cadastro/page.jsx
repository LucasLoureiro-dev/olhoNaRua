"use client"
import axios from "axios";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect } from "react";

export default function Cadastro() {

    useEffect(() => {
        if (localStorage.getItem("Email") == null) {

        }
        else if (localStorage.getItem("Cargo") == "Usuario") {
            window.location.replace("/perfil");
        }
        else if (localStorage.getItem("Cargo") == "Admin") {
            window.location.replace("/adm");
        }
    }, [])

    const { register, handleSubmit, resetField, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            Email: "",
            Senha: ""
        },
    });

    const onSubmit = async (data) => {
        console.log(data)

        const { Email, Senha } = data;

        const cadastroBody = {
            Email: Email,
            Senha: Senha
        }

        console.log(cadastroBody)



        await axios.post('http://localhost:3001/usuarios', cadastroBody)
            .then((response) => {
                console.log(JSON.stringify(response.data))
                const responseToString = JSON.stringify(response.data.mensagem)
                alert(JSON.stringify(response.data.mensagem) + " Seu id é: " + response.data.usuarioId + ", te redirecionando para a pagina de login!")
                resetField("Email")
                resetField('Senha')
                window.location.replace("/login");
            })
    }

    return (
        <>
            <p><Link href="/">Pagina inicial</Link></p>
            <p><Link href="/login/">Fazer login</Link></p>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Email: <input type="email" {...register("Email", { required: true })} placeholder="email@example.com" /></p>
                <p>Senha: <input type="password" {...register("Senha", { required: true })} placeholder="Senhalegal123" /></p>
                <button type="submit">Fazer login</button>
                {errors.Email && errors.Senha && <p> Insira EMAIL e SENHA!! </p> || errors.Email && <p> Insira EMAIL!! </p> || errors.Senha && <p> Insira SENHA!! </p>}
            </form>
        </>
    )
}