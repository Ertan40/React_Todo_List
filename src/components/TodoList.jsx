import React from 'react'
import TodoCard from "./TodoCard"

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Go to the shopping center',
        'Do not forget to pick up the kid from school'
    ]
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
