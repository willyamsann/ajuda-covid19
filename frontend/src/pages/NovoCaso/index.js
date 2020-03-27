import React, {useState} from 'react';
import logo from '../../assets/logo3.svg';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css';

import api from '../../services/api';

export default function NovoCaso(){
    const [titulo,setTitulo] = useState('');
    const [descricao,setTDescricao] = useState('');
    const [tipo,setTipo] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    async function handeleNewIncidents(e){
        e.preventDefault();
        const data = {
            titulo,
            descricao,
            tipo,
        };
        try{
                await api.post('incidents', data, {
                    headers:{
                        autorizacao: ongId,
                    }
                })
                history.push('/perfil');
        }catch(err){
            alert('Erro ao cadastra ação, tente novamentr')
        }
    }
    return(
        <div className="newaction-container">
        <div className="content">
            <section>
            <img  align="center"src={logo} alt="Logo"/>
            <h1>Cadastra Ação</h1>
        <p>Descreva sua ação social , e ajude pessoas nessa pandemia.c</p>
            
            
                     <Link className="back-link" to="/">
                    <FiArrowLeft  size={16} color="E02041"/>Voltar</Link>

            </section>
            <form onSubmit={handeleNewIncidents}>
                <input 
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                placeholder="Titulo da Ação"/>
                <textarea  
                value={descricao}
                onChange={e => setTDescricao(e.target.value)}
                placeholder="Descrição"/>
                <input 
                value={tipo}
                onChange={e => setTipo(e.target.value)}
                placeholder="Tipo da AÇão"/>
                <button className="button" type="submit">Cadastrar</button>


            </form>
        </div>
        </div>
    )
}