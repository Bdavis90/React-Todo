import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  },
  {
    task: "Bake Cookies",
    id: Date.now(),
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoData
    };
  }

  handleChange = event => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm handleChange={this.handleChange} />
          <TodoList todoData={this.state.todoData} />
        </div>
      </div>
    );
  }
}

export default App;
