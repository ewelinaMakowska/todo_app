import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';

class App extends Component {
    state = {
        todos: [
            
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({
            todos: todos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        console.log(todo.id);
        this.setState({
            todos: todos
        })
    }


    render() {
        return (
            <div className="whole-app-container">
                <div className="app-container">
                      <h1>To do:</h1>
                <div className="list-box">
                  
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                    
                </div>
                </div>
                <AddTodo addTodo={this.addTodo} />
            </div>
        );
    }
}

export default App;
