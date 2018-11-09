import React, { Component } from 'react';
import { List, Checkbox } from 'semantic-ui-react';
import { Progress } from 'semantic-ui-react';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{value:'a', done: true, temp: true}, {value:'b', done: true, temp: true}, {value:'d', done: false, temp:true}],
      done: 2,
      percent: 66,
      newItem: '',
      first: true,
    }
  }
  addToList = () => {
    let list = this.state.todos;
    list.unshift({value: this.state.newItem, done: false});
    this.setState({todos: list});
    const percent = Math.floor(100 * this.state.done/this.state.todos.length);
    this.setState({percent: percent})
  }
  editItem = (e) => {
    let found = e.target.parentNode.id[0];
    let updated = this.state.todos.slice();
    updated[found].value = e.target.value;
    this.setState({todos: updated});
  }

  updateNewItem = (e) => {
    this.setState({newItem: e.target.value});
  }
  delete = (e) => {
    const doneCount = this.state.done - 1;
    const percent = Math.floor(100 * doneCount/this.state.todos.length - 1);
    let found = e.target.parentNode.id[0];
    let updated = this.state.todos.slice();
    updated.splice(found, 1);
    this.setState({todos: updated, done: doneCount, percent: percent})
  }
  updateProgress = (e) => {
    let found = e.target.parentNode.parentNode.id[0];
    let updated = this.state.todos.slice();
    let direction = !updated[found].done;
    let doneCount = this.state.done;
    updated[found].done = !updated[found].done;
    if (direction) {
      doneCount++;
    } else {
      doneCount--;
    }
    const percent = Math.floor(100 * doneCount/this.state.todos.length);
    this.setState({todos: updated, done: doneCount, percent: percent})
  }
  switchInput = (e) => {
    let found = e.target.parentNode.id[0];
    let updated = this.state.todos.slice();
    updated[found].temp = !updated[found].temp;
    this.setState({todos: updated})
  }
  render() {
    return (
      <div>
        <Progress percent={this.state.percent} />
        <List>
          {this.state.todos.map( (todo, i) => {
            return (
              <List.Item key={i} id={`${i}todo1`} >
                {todo.temp && <span onClick={this.switchInput}>{todo.value}</span>}
                {!todo.temp &&<input onBlur={this.switchInput} value={todo.value} onChange={this.editItem} />}
                <Checkbox toggle checked={todo.done} onClick={this.updateProgress}/>
                {todo.done && <button onClick={this.delete}>X</button>}
              </List.Item>
            )
          })}
        </List>
        <div>
          <input value={this.state.newItem} onChange={this.updateNewItem} />
          <button onClick={this.addToList}>Add</button>
        </div>
      </div>
    )
  }
}

export default Todo;