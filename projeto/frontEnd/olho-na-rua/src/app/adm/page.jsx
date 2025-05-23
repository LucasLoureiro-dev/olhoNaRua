import Image from "next/image";
import axios from 'axios'
import Link from "next/link";


export default async function Admin() {

    const denuncias = await axios.get('http://localhost:3001/denuncias')
    const data = denuncias.data;

    let contadorDenuncia = 0;
    let numeroDenuncias = 0;
    data.map((item, index) => {
        numeroDenuncias = numeroDenuncias + 1
    })

    const usuarios = await axios.get('http://localhost:3001/usuarios')
    const dataUsuarios = usuarios.data;



    return (
        <>
            {data ? (
                <div>
                    <h1> Painel de ADM </h1>
                    <Link href="/logOut"> - sair - </Link>
                    <h1>Denuncias recebidas: {numeroDenuncias}</h1>
                    {data.map((item, index) => {
                        console.log(item.id_Usuario)
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
                                            })
                                        ) : (
                                            <>
                                                carregando...
                                            </>
                                        )}

                                        <p>Foto: </p>
                                        {item.Foto ? (
                                            <>
                                                <img style={{ paddingLeft: '30px' }} src={item.Foto} />
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

            {dataUsuarios ? (
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
            )}

        </>
    )
}

