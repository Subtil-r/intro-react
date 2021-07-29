import React from 'react';
//import TodoItem from './TodoItem';

function Todolist(props) {
  
  return (
    <ul>
      {props.todos.map((todo) => (
        <li>
          <input key={todo} type="checkbox" checked="n" /> {todo}
        </li>
      ))}
    </ul>
  );
}

export default Todolist
