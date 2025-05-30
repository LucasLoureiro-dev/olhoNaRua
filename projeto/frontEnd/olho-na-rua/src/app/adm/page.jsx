"use client"
import Image from "next/image";
import axios from 'axios'
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Admin() {
    const [data, setData] = useState([])
    const [dataUsuarios, setDataUsuarios] = useState([])
    const [adm, setAdm] = useState({})

    
    useEffect(() => {
        if (localStorage.getItem("Cargo") == "Admin") {

        }
        else if (localStorage.getItem("Cargo") != "Admin") {
            window.location.replace("/login");
        }
    }, [])

    useEffect(() => {
        const Email = localStorage.getItem("Email")
        const Senha = localStorage.getItem("Senha")

        axios.get('http://localhost:3001/denuncias')
            .then((response) => {
                setData(response.data)
            })

        axios.get('http://localhost:3001/usuarios')
            .then((response) => {
                setDataUsuarios(response.data)
            })

        axios.get(`http://localhost:3001/usuarios/${Email}/${Senha}`)
            .then((response) => {
                console.log(response.data)
                setAdm(response.data.usuario)
            })

    }, [])

    let numeroDenuncias = 0;
    data.map((item, index) => {
        numeroDenuncias = numeroDenuncias + 1
    })
    let contadorDenuncia = 0;



    return (
        <>
            {data ? (
                <div>
                    <h1> Painel de ADM </h1>
                    {adm ? (
                        <>
                            <h5>conectado como: {adm.Nome}</h5>
                        </>
                    ) : (
                        <>
                            carregando...
                        </>
                    )}
                    <Link href="/logOut"> - sair - </Link>
                    <h1>Denuncias recebidas: {numeroDenuncias}</h1>
                    {data.map((item, index) => {
                        if (dataUsuarios.Id == item.Id) {
                            return (
                                <div key={index}>
                                    <h3>denuncia: {contadorDenuncia = contadorDenuncia + 1}</h3>
                                    <div style={{ paddingLeft: '30px' }}>
                                        <p>Motivo: {item.Motivo}</p>
                                        <p>Descrição: {item.Descricao}</p>
                                        <p>Localização: {item.Localizacao}</p>
                                        <p>Status da denuncia: {item.Estado}</p>
                                        {dataUsuarios ? (
                                            dataUsuarios.map((user, index) => {
                                                if (user.Id == item.id_Usuario) {
                                                    return (
                                                        <div key={index}>
                                                            <p>Usuário que fez a denuncia: {user.Email}</p>
                                                        </div>

                                                    )
                                                }
                                            }
                                            )
                                        ) : (
                                            <>
                                                carregando...
                                            </>
                                        )}

                                        <p>Foto: </p>
                                        {item.Foto ? (
                                            <>
                                                <img style={{ paddingLeft: '30px', width: '400px', height: '300px' }} src={item.Foto} />
                                            </>
                                        ) : (
                                            <>
                                                <p style={{ paddingLeft: '30px' }}>Indisponivel!!!</p>
                                            </>
                                        )}

                                    </div>
                                </div>
                            )
                        }
                    })}

                </div>
            ) : (
                <>
                    carregando...
                </>
            )}

            {/* {dataUsuarios ? (
                <div>
                    <h1> Numero de usuários: {dataUsuarios.Id} </h1>
                    {dataUsuarios.map((item, index) => {
                        const numeroUsuario = index + 1
                        return (
                            <div key={index}>
                                <span>
                                    Usuario {numeroUsuario}:
                                    <div style={{ marginLeft: '30px' }}>
                                        <p>
                                            Email: {item.Email}
                                        </p>
                                        <p>
                                            Senha: {item.Senha}
                                        </p>
                                        <p>
                                            Cargo: {item.Cargo}
                                        </p>
                                    </div>
                                </span>
                            </div>
                        )
                    })}

                    <h2 style={{ textAlign: 'center' }}><Link href="/">Pagina inicial</Link></h2>
                </div>
            ) : (
                <>
                    carregando...
                </>
            )} */}

        </>
    )
}

