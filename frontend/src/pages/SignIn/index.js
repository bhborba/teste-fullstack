import React from 'react';
import logo from '../../assets/logo.png';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Grupo Kyly" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
      </form>
    </>
  );
}
