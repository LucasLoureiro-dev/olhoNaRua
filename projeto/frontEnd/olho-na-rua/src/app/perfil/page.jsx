"use client"

import Image from "next/image";
import axios from 'axios'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Perfil() {
    const [storedEmailValue, setStoredEmailValue] = useState('');
    const [storedSenhaValue, setStoredSenhaValue] = useState('');
    useEffect(() => {
        if(localStorage.getItem("token")){
            setStoredEmailValue(localStorage.getItem("Email"))
            setStoredSenhaValue(localStorage.getItem("Senha"))
        }
        
        
    }, [])
    
    console.log("email: ", storedEmailValue, "senha: ", storedSenhaValue)

    const user = async () => {
        await fetch(`http://localhost:3001/usuarios/${storedEmailValue}/${storedSenhaValue}`)
    }

    return (
        <>
            <h1> Perfil </h1>
            <p><Link href="/fazerDenuncia"> Fazer denuncia </Link></p>
            <p><Link href="/logOut"> - sair -</Link></p>

            <h1> Dados do usuário </h1>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            
            
        </>
    );

}
