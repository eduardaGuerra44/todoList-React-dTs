import React from 'react';
// uma variável que pode ser modificada com o tempo
import { useState } from 'react';
// C de components 
import * as C from './App.styles'
import { Item } from './types/Item'








const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão amanhã', done: false},
    { id: 2, name: 'Comprar pão amanhã', done: false},
    { id: 3, name: 'Comprar pão amanhã', done: false}
  ])

  return (
    
  <C.Container>
    <C.Area>
      <C.Header>Lista de Tarefas</C.Header>

    {list.map((item, index)=>(
      <div>...</div>
    ))}

    </C.Area>
  </C.Container>
  );
}

export default App;
