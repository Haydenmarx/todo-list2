import React from 'react';
import { List } from 'semantic-ui-react';
import { Progress } from 'semantic-ui-react';
import Todo from './Todo';
import AddItem from './AddItem';

const Todos = (props) => {
  return (
    <div>
      <Progress percent={props.percent} />
      <List>
        {props.todos.map( (todo, i) => {
          return (
            <Todo
              key={`list${props.id}Item${i}`}
              todo = {todo}
              listIndex={props.index}
              todoIndex={i}
              editEntry={props.editEntry}
            ></Todo>
          )
        })}
      </List>
      <AddItem add={props.editItem}></AddItem>
    </div>
  )
}

export default Todos;
