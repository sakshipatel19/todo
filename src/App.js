import React, { Component } from 'react';
import './App.css';
import Todos from "./components/todos"
class App extends Component {

  state={
    text : '',
    todos:[
      { id : 1, task : "start gym", status : false },
      { id : 2, task : "get inked", status : true }
    ]
  }
  handleChange(e){
    this.setState({
      text:e.target.value
    })
  }
  handleDelete = (i) =>{
    const newTodo =[...this.state.todos];
    newTodo.splice(i,1)
    this.setState({ todos : newTodo })
  }

  addTodo = () =>{
    if(this.state.text){
      let index = this.state.todos.length + 1,
      task = this.state.text;
      let newTodo =[...this.state.todos,{ id : index, task : task, status : false }];
      this.setState({ todos : newTodo ,text : ''})
    }
  }
  handleToggleStatus = (id) =>{
    const todos = [...this.state.todos];
    const todo= {...this.state.todos[id]}
    todo.status = !(todo.status);
    todos[id] = todo;
    this.setState({ todos : todos })
  }
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Add todo" style={{margin:"10px auto"}} value={this.state.text} onChange={(e) => this.handleChange(e)}/>
        <input type="button" value="Add" onClick = {()=> this.addTodo()} />
        <div style={{margin:"10px auto"}}>
          <Todos todos= {this.state.todos} handleToggleStatus = {this.handleToggleStatus} handleDelete = {this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default App;
