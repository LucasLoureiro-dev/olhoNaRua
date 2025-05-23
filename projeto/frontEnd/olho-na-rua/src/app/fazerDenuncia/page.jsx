'use client'
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function FormDenuncia() {
    const [form, setForm] = useState({
        Motivo: '',
        Descricao: '',
        Localizacao: '',
        id_Usuario: '',
        Estado: 'Para análise',
        Foto: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/denuncias', form);
            alert('Denúncia enviada com sucesso!');
        } catch (err) {
            console.error(err);
            alert('Erro ao enviar denúncia.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="Motivo" placeholder="Motivo" value={form.Motivo} onChange={handleChange} required />
            <textarea id="Descricao" placeholder="Descrição" value={form.Descricao} onChange={handleChange} required />
            <input type="text" id="Localizacao" placeholder="Localização" value={form.Localizacao} onChange={handleChange} required />
            <input type="number" id="id_Usuario" placeholder="ID do Usuário" value={form.id_Usuario} onChange={handleChange} required />
            <select id="Estado" value={form.Estado} onChange={handleChange}>
                <option value="Para análise">Para análise</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluida">Concluída</option>
            </select>
            <input type="file" id="Foto" value={form.Foto} onChange={handleChange} required />
            <button type="submit">Enviar Denúncia</button>
        </form>
    );
}

export default FormDenuncia;
