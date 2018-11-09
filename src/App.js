import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists : [
        {
          id: 0,
          title: 'test',
          todos: [{value:'a', done: false}, {value:'b', done: true}, {value:'c', done: false}],
          done: 1,
          percent: 33,
        },
        {
          id: 1,
          title: 'Dog sitting',
          todos: [{value:'Walk the Dog', done: true}, {value:'Feed the Dog', done: true}, {value:'Wash the Dog', done: false}],
          done: 2,
          percent: 66,
        }
      ]
    }
  }
  editEntry = (index, listKey, value, todoKey) => {
    let lists = this.state.lists.slice();
    console.log(index, listKey, value, todoKey)
    if (listKey === 'toggle') {
      lists[index].todos[todoKey].done = value;
    } else if (listKey === 'delete') {
      lists[index].todos.splice(todoKey, 1);
    } else if (listKey === 'edit') {
      lists[index].todos[todoKey].value = value;
    } else {
      lists[index][listKey] = value;
    }
    this.setState({lists: lists});
  }
  render() {
    return (
      <div className="App">
        {this.state.lists.map( (list, i) => {
          return <Todos 
            key={list.id}
            id={list.id}
            index={i}
            todos={list.todos}
            title={list.title}
            done={list.done} 
            percent={list.percent}
            editEntry={this.editEntry}
          ></Todos>
        })}
      </div>
    );
  }
}

export default App;
