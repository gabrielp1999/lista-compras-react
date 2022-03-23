import React, { useState } from "react";

// Criar uma função que checa se o checkbox esta marcado

function Tarefas() {
  const [lista, setLista] = useState([]);
  const [produto, setProduto] = useState("");
  
  return(
    <div className="Tarefa">
      <h3>Lista de Compras</h3>
      <input
        placeholder="Café"
        onChange={e => setProduto(e.target.value)}
        value={produto}
      />
      <button onClick={() => setLista([...lista, produto])}>Listar Compra</button>
      <div>{lista.map(item => (
        <div className="item"><input
         className="caixa"
          type="checkbox"
          
          />{item}</div>
        ))}
      </div>
    </div>
  )
}

export default Tarefas;
