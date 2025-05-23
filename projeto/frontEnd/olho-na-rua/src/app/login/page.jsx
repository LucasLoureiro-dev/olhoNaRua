"use client"
import axios from "axios";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect } from "react";

export default function Login() {

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
            Senha: "",
            Cargo: "Usuario"
        },
    });

    const onSubmit = async (data) => {
        console.log(data)

        const { Email, Senha, Cargo } = data;

        await axios.get(`http://localhost:3001/usuarios/${Email}/${Senha}`)
            .then((response) => {
                console.log(response.data)
                const user = response.data
                if (user.Cargo == Cargo && Cargo == "Admin") {
                    alert("Login realizado com sucesso" + ", bem vindo ADM")
                    localStorage.setItem("Email", Email)
                    localStorage.setItem("Senha", Senha)
                    localStorage.setItem("Cargo", Cargo)
                    resetField("Email")
                    resetField("Senha")
                    window.location.replace("/adm/");
                }
                else if (user.Cargo == Cargo && Cargo == "Usuario") {
                    alert("Login realizado com sucesso" + ", redirecionando para a pagina de perfil")
                    localStorage.setItem("Email", Email)
                    localStorage.setItem("Senha", Senha)
                    localStorage.setItem("Cargo", Cargo)
                    resetField("Email")
                    resetField("Senha")
                    window.location.replace("/perfil");
                }
                else {
                    console.log("Email, senha ou cargo incorretos, tente novamente!!")
                    alert("Erro ao realizar login, email, senha ou cargo incorretos")
                    resetField("Email")
                    resetField("Senha")
                }


            })
            .catch((error) => {
                console.log("Email, senha ou cargo incorretos, tente novamente!!")
                alert("Erro ao realizar login, email, senha ou cargo incorretos")
                resetField("Email")
                resetField("Senha")
            })
    }

    return (
        <>
            <p><Link href="/">Pagina inicial</Link></p>
            <p><Link href="/cadastro/">Fazer cadastro</Link></p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Email: <input type="email" {...register("Email", { required: true })} placeholder="meuEmail@example.com" /></p>
                <p>Senha: <input type="password" {...register("Senha", { required: true })} placeholder="minhaSenhalegal123" /></p>
                <p>Tipo de login:
                    <select {...register("Cargo", { required: true })} >
                        <option value="Usuario">Usuário</option>
                        <option value="Admin">Admin</option>
                    </select>
                </p>
                <button type="submit">Fazer login</button>
                {errors.Email && errors.Senha && <p> Insira EMAIL e SENHA!! </p> || errors.Email && <p> Insira EMAIL!! </p> || errors.Senha && <p> Insira SENHA!! </p>}
            </form>
        </>
    )
}