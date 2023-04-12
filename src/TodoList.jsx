import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <TodoItem id={todo.id} 
            completed={todo.completed} 
            title={todo.title} 
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          )
        })}
    </div>
  )
}

export default TodoList