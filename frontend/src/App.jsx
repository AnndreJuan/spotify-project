import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState(0);
  const [inputTexto, setInputTexto] = useState("");
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/mensagem")
      .then(response => response.json())
      .then(data => setMensagem(data.mensagem))
      .catch(error => console.error("Erro ao buscar mensagem:", error));
  }, [])

  return (
    <>
      <div>
        <p>Mensagem do backend: <strong>{mensagem}</strong></p>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)
          }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
