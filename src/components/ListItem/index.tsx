import React, { useState } from "react";
import * as C from './styles';
import {Item} from '../../types/Item';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {

    const [isChecked, setIschecked] = useState(item.done)

    return (
        <C.Container done={isChecked}>
          <input type="checkbox" 
          checked={isChecked}
          onChange = {e => setIschecked(e.target.checked)}
          />
          <label>{item.name}</label>
        </C.Container>
    );
}