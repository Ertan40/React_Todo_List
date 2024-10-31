import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
  return (
    <li className="todoItem">
        {children}
        <div className="actionsContainer"> 
            <button onClick={() => {
                handleEditTodo(index)
            }}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            
        </div>
    </li>
    
  )
}
