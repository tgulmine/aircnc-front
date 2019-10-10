import React, { useState } from 'react';
import api from './services/api'

import logo from './assets/logo.svg'

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    console.log(_id);
  }

  return (
    <div className="mt-20 mx-auto max-w-md w-full flex flex-col items-center">
      <img src={logo} alt="AirCnC"></img>

      <div className="w-full bg-white mt-12 p-7 rounded">
        <p className="text-1.5xl mb-6">
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-sm text-gray-800 font-bold mb-2" htmlFor="email">E-MAIL *</label>
          <input className="mb-5 border border-solid border-gray-400 h-10 px-4 text-base rounded-sm"
            type="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
