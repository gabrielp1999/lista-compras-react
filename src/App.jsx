import './App.css';
import React from 'react';
import Tarefas from './components/Terefas';

function App() {
  document.title = "Lista de Compra"
  return (
    <div className="App">
      <Tarefas />
    </div>
  );
}

export default App;
