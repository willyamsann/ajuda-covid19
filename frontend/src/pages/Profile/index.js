import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';

import './style.css';
import api from '../../services/api';
import logo from '../../assets/logo3.svg';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName'); 

    const history = useHistory();
    useEffect(() => {
        api.get('profile',{
            headers:{
            Autorizacao: ongId,
            }
        }).then(response =>{
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{ headers:{
                Autorizacao: ongId,
            }});

            setIncidents(incidents.filter(incidents => incidents.id != id));
        }catch(err){
            alert('Erro ao Deletar Ação')
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
            <img  align="center"src={logo} alt="Logo"/>
    <span>Bem vindo, {ongName}</span>
            <Link className="button" to="/acao/novo">Cadastrar Nova Ação</Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="red"/>
                            </button>
            </header>
        <h1>Ações Cadastradas</h1>
        <ul>
            {incidents.map(incidents => (
                <li key={incidents.id}>
                <strong>AÇÃO:</strong>
            <p>{incidents.titulo}</p>
                <strong>DESCRIÇÃO:</strong>
                <p>{incidents.descricao}</p>
                <strong>TIPO</strong>
                <p>{incidents.tipo}</p>
                <button onClick={() => handleDeleteIncident(incidents.id)}type="button">
                <FiTrash2 size={20} color="grey"/>
                </button>
            </li>
            
            ))}
        </ul>
        </div>
        )
}