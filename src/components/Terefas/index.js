import React, { useState } from "react";

function Tarefas() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [produto, setProduto] = useState("");

  function marcarCheckbox(index) {
    const novaLista = listaTarefas.map((itemProduto, indexProduto) => {

      if(indexProduto === index){
        return {
          ...itemProduto,
          marcado: !itemProduto.marcado
        }
      }
      return itemProduto;
    })
    setListaTarefas(novaLista)
  }

  const setGeral = () =>{
    if(produto.length < 2){
    return alert('digite o item que deseja comprar');
   }
   setListaTarefas([...listaTarefas, {
   produto:produto, marcado:false 
  }])}

  const filtrados = listaTarefas.filter(value => value.marcado);
  const result = filtrados.length;
    
  return(
    <div className="Tarefa">
      <h3>Lista de Compras</h3>
      <input
        placeholder="Café"
        onChange={e => setProduto(e.target.value)}
        value={produto}
      />
      <button 
        onClick={setGeral} >
        Listar Compra
      </button>

      <h5> <span>{result}</span> iten(s) no carrinho</h5>

      <div>{listaTarefas.map((item, index) => (
        <div className="item">
          <input
          className="caixa"
          type="checkbox"
          defaultChecked={item.marcado}
          onChange={() => marcarCheckbox(index)}
          />{item.produto}</div>
        ))}
      </div>
    </div>
  )
}
export default Tarefas;
