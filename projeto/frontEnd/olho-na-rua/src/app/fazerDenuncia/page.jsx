'use client'
import { useState } from 'react';
import axios from 'axios';

function FormDenuncia() {
    const [form, setForm] = useState({
        Motivo: '',
        Descricao: '',
        Localizacao: '',
        id_Usuario: '',
        Estado: 'Para análise',
        Foto: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'Foto') {
            setForm({ ...form, Foto: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Motivo', form.Motivo);
        formData.append('Descricao', form.Descricao);
        formData.append('Localizacao', form.Localizacao);
        formData.append('id_Usuario', form.id_Usuario);
        formData.append('Estado', form.Estado);

        if (form.Foto) {
            formData.append('Foto', form.Foto);
        }

        try {
            const token = localStorage.getItem("token")
            const response = await axios.post('http://localhost:3001/denuncias', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer `
                }
            });
            console.log(response.data);
            alert("Denuncia feita com sucesso")
        } catch (error) {
            console.error('Erro ao enviar:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="Motivo" name="Motivo" placeholder="Motivo" onChange={handleChange} required />
            <textarea id="Descricao" name="Descricao" placeholder="Descrição" onChange={handleChange} required />
            <input type="text" id="Localizacao" name="Localizacao" placeholder="Localização" onChange={handleChange} required />
            <input type="number" id="id_Usuario" name="id_Usuario" placeholder="ID do Usuário" onChange={handleChange} required />
            <input type="file" id="Foto" name="Foto" onChange={handleChange} />
            <button type="submit">Enviar Denúncia</button>
        </form>
    );
}

export default FormDenuncia;
