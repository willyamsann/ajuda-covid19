import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

import api from '../../services/api';
import heroesImg from '../../assets/herois.png';
import logo from '../../assets/logo3.svg';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.nome);
            history.push('/perfil');
        }catch(err){
            alert('Falha na autenticação');
        }
    }    

    return(
       <div className="logon-container">
           
           <section className="form">
            <img  align="center"src={logo} alt="Logo"/>
            
            <h5>"Vamos Ajudar nessa quaretena pessoas com pequenas Ações
                <p>Seja ela um conselho, dicas , livros, conversas psicologicas, doações"</p></h5>
          
           
           <form onSubmit={handleLogin}>
                <h1>Faça seu Login</h1>
                <input 
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)} />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/cadastro">
                    <FiLogIn  size={16} color="E02041"/>Não tenho Cadastro</Link>
           </form>
           </section>
           <img src={heroesImg} alt="Heroes"/>
       </div>
    );
}