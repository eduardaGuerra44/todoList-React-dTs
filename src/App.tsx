import React from "react";
// uma variável que pode ser modificada com o tempo
import { useState } from "react";
// C de components
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    // { id: 1, name: "Comprar pão amanhã", done:  },
    // { id: 2, name: "Estudar Matemática", done: },
    // { id: 3, name: "lavar roupa", done: false },
  ]);
    // função que recebe uma string e adiciona na lista
    const handleAddTask = (taskName: string) => {
      let newList = [...list];
      newList.push({
        id: list.length + 1,
        name: taskName,
        done: false
      })
      setList(newList)
    }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* area de adicionar novas tarefas  */}
          <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
           <ListItem key={index} item={item}/>
        ))}
        
      </C.Area>
    </C.Container>
  );
};

export default App;
