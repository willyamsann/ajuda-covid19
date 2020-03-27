import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css'

import api from '../../services/api';
import logo from '../../assets/logo3.svg';

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    async function handleRegister(e){
        e.preventDefault();

        const data = ({
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        });
        try{
            
        const response = await api.post('/ongs', data);
        history.push('/');    
        alert(`Seu ID de Acesso: ${response.data.id}`);
        }catch(err){
            alert('Erro no Cadastro');
        }
    }
    return(
        <div className="register-container">
        <div className="content">
            <section>
            <img  align="center"src={logo} alt="Logo"/>
            <h1>Cadastro</h1>
        <p>Faça seu cadastro, entre na plataforma e ajude pessoas nesse tempo de COVID 19, com pequenas ações sociais</p>
            
            
                     <Link className="back-link" to="/">
                    <FiArrowLeft  size={16} color="E02041"/>Tenho Cadastro</Link>

            </section>
            <form onSubmit={handleRegister}>
                <input
                 placeholder="Seu Nome"
                 value={nome}
                 onChange={e => setNome(e.target.value)}/>
                <input 
                type="email"
                 placeholder="Email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}/>
                <input 
                placeholder="Whatsapp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}/>
                <div className="input-group">
                    <input 
                    placeholder="Cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}/>
                    <input 
                    placeholder="UF" 
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    style={{width: 80}
                    }/>
                </div>
                <button className="button" type="submit">Cadastrar</button>


            </form>
        </div>
        </div>
    )
}