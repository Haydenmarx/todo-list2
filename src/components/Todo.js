import React, { Component } from 'react';
import { List, Checkbox } from 'semantic-ui-react';
import InputToggle from './InputToggle';

class Todo extends Component {
  toggleDone = () => {
    this.props.editEntry(this.props.listIndex, 'toggle', !this.props.todo.done, this.props.todoIndex);
  }
  removeTodo = () => {
    this.props.editEntry(this.props.listIndex, 'delete', !this.props.todo.done, this.props.todoIndex);
  }

  render() {
    return (
      <List.Item id={`${this.props.todoIndex}todo${this.props.listIndex}`} >
        <InputToggle location={this.props.todoIndex} display={this.props.todo.value} update={this.editEntry}></InputToggle>
        <button disabled={!this.props.todo.done} onClick={this.removeTodo}>X</button>
        <Checkbox toggle checked={this.props.todo.done} onClick={this.toggleDone}/>
      </List.Item>
    )
  }
}

export default Todo;
