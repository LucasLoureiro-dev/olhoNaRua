"use client";

import styles from "./page.module.css";
// Instalações para o calendário: npm install react-datepicker date-fns
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { use, useState } from "react";
import axios from "axios";

export default function Formulario() {
    const [dataSelecionada, setDataSelecionada] = useState(null);
    const [mensagem, setMensagem] = useState('')
    const [modal, setModal] = useState(null)

    const [form, setForm] = useState({
        Cep: "",
        Bairro: "",
        Rua: "",
        Email: "",
        PontoReferencia: "",
        Relato: "",
        Foto: "",
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'Foto') {
            setForm({ ...form, Foto: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        setMensagem('')
        e.preventDefault();
        console.log(form)

        if (form.Cep == '' && form.Bairro == '' && form.Rua == '' && form.Email == '' && form.PontoReferencia == '' && form.Relato == '') {
            setMensagem('Preencha todos os campos do formulario!!!')
        }
        else if (form.Cep == '') {
            setMensagem('Preencha seu cep!!!')
        }
        else if (form.Bairro == '') {
            setMensagem('Preencha seu bairro!!!')
        }
        else if (form.Rua == '') {
            setMensagem('Preencha sua rua!!!')
        }
        else if (form.Email == '') {
            setMensagem('Preencha seu email!!!')
        }
        else if (form.PontoReferencia == '') {
            setMensagem('Coloque um ponto de referencia!!!')
        }
        else if (form.Relato == '') {
            setMensagem('Deixe seu relato!!!')
        }
        else {
            const email = localStorage.getItem("Email")
            const senha = localStorage.getItem("Senha")
            await axios.get(`http://localhost:3001/usuarios/${email}/${senha}`, {
                headers: {
                    "Content-Type": 'application/json'
                }
            })
                .then((responce) => {
                    const id_Usuario = responce.data.usuario.Id

                    const formData = new FormData()
                    formData.append("Cep", form.Cep)
                    formData.append("Bairro", form.Bairro)
                    formData.append("Rua", form.Rua)
                    formData.append("Email", form.Email)
                    formData.append("id_Usuario", id_Usuario)
                    formData.append("PontoReferencia", form.PontoReferencia)
                    formData.append("Data", dataSelecionada)
                    formData.append("Relato", form.Relato)
                    formData.append("Foto", form.Foto)

                    try {
                        const token = localStorage.getItem("token")
                        axios.post('http://localhost:3001/denuncias', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                'Authorization': `Bearer ${token}`
                            }
                        })
                            .then((response) => {
                                console.log(response.data)
                                setModal(true)
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    } catch (error) {
                        console.error('Erro ao enviar:', error.message);
                    }
                })
        }

    };

    return (
        <>

            {/*Div para o banner da página*/}
            <div className={styles.banner}>
                <img src="./imgFormulario.png" alt="Banner azul e amarelo com frase marcante" />
            </div>

            {/*Div para armazenar o formulário*/}
            <form className={styles.formulario} onSubmit={handleSubmit}>
                <h2 className={styles.titulo}>Faça sua denúncia</h2>
                <p className={styles.primeiroSubtitulo}>Informações sobre o local</p>

                {/*Div para armazenar os conteúdos do endereço*/}
                <div className={styles.endereco}>
                    <div>
                        <label className={styles.label} htmlFor="cep">CEP*</label>
                        <input type="text" name="Cep" id="cep" className={styles.input} onChange={handleChange} />
                    </div>
                    <div>
                        <label className={styles.label} htmlFor="bairro">BAIRRO*</label>
                        <input type="text" name="Bairro" id="bairro" className={styles.input} onChange={handleChange} />
                    </div>
                    <div>
                        <label className={styles.label} htmlFor="rua">RUA*</label>
                        <input type="text" name="Rua" id="rua" className={styles.input} onChange={handleChange} />
                    </div>
                    <div>
                        <label className={styles.label} htmlFor="email">EMAIL PARA CONTATO*</label>
                        <input type="email" name="Email" id="email" className={styles.input} onChange={handleChange} />
                    </div>
                </div>

                {/*Div para o campo de preenchimento do ponto de referência*/}
                <div>
                    <label className={styles.label} htmlFor="pontoReferencia">PONTO DE REFERÊNCIA*</label>
                    <input type="text" name="PontoReferencia" id="pontoReferencia" className={styles.inputFull} onChange={handleChange} />
                </div>

                <h3 className={styles.segundoSubtitulo}>Sobre o ocorrido</h3>
                {/*Div para armazenar as informações do ocorrido*/}
                <div className={styles.ocorrido}>
                    <div>
                        {/*Seção que armazena a data e deixa o calendário mais bonito e intuitivo*/}
                        <label className={styles.label} htmlFor="data">DATA*</label>
                        <DatePicker
                            selected={dataSelecionada}
                            onChange={(date) => setDataSelecionada(date)}
                            dateFormat="yyyy/MM/dd"
                            className={styles.input}
                        />
                    </div>

                    {/*Div para a seção de relato*/}
                    <div>
                        <label className={styles.label} htmlFor="relato">RELATO* (INFORMAÇÕES ADICIONAIS)</label>
                        <textarea name="Relato" id="relato" rows="5" className={styles.textarea} onChange={handleChange}></textarea>
                    </div>
                </div>

                {/*Div para a seção de anexos*/}
                <div>
                    <label className={styles.label} htmlFor="Foto">ANEXOS</label>
                    <input type="file" name="Foto" id="Foto" className={styles.inputFull} onChange={handleChange} />
                </div>

                {/*Botão de enviar o formulário*/}
                {/* Button trigger modal */}
                <button
                    type="submit"
                    className="btn btn-warning text-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Enviar Denuncia
                </button>
                {modal ? (
                    <>
                        {/* Modal */}
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="{-1}"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                                            Denuncia enviada!
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        Sua denuncia foi enviada com sucesso, agora está em analise, acompanhe
                                        sua denuncia em "perfil".
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-dismiss="modal"
                                        >
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>

                    </>
                )}
            </form >
        </>
    );
}