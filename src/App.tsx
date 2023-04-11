import React from "react";
// uma variável que pode ser modificada com o tempo
import { useState } from "react";
// C de components
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";


const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão amanhã", done: false },
    { id: 2, name: "Estudar Matemática", done: true},
    { id: 3, name: "lavar roupa", done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* area de adicionar novas tarefas  */}

        
        {list.map((item, index) => (
           <ListItem key={index} item={item}/>
        ))}
        
      </C.Area>
    </C.Container>
  );
};

export default App;
