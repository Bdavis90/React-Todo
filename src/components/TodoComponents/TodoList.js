// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todoData.map(todo => {
        return (
          <div>
            <Todo key={todo.id} todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
