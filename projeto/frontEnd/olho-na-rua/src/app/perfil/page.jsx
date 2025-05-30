"use client"

import Image from "next/image";
import axios from 'axios'
import Link from "next/link";
import { useState, useEffect, use } from "react";

export default function Perfil() {
    const [storedEmailValue, setStoredEmailValue] = useState(null);
    const [storedSenhaValue, setStoredSenhaValue] = useState(null);
    const [usuario, setUsuario] = useState(null)
    useEffect(() => {

        setStoredEmailValue(localStorage.getItem("Email"))
        setStoredSenhaValue(localStorage.getItem("Senha"))


    }, [])

    useEffect(() => {
        if (storedEmailValue != null) {
            axios.get(`http://localhost:3001/usuarios/${storedEmailValue}/${storedSenhaValue}`)
                .then((response) => {
                    setUsuario(response.data.usuario)
                })
        }
    }, [storedEmailValue])

    console.log(usuario)

    return (
        <>
            <h1> Perfil </h1>
            <p><Link href="/fazerDenuncia"> Fazer denuncia </Link></p>
            <p><Link href="/logOut"> - sair -</Link></p>

            <h1> Dados do usuário </h1>

            {usuario ? (
                <>
                    <h2>Nome: {usuario.Nome}</h2>
                    <h4>Email: {usuario.Email}</h4>
                    <h4>Senha: {storedSenhaValue}</h4>
                    <h4>Senha hacheada: {usuario.Senha}</h4>
                </>
            ) : (
                <>
                    carregando...
                </>
            )}


        </>
    );

}
