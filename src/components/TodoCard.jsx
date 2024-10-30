import React from 'react'

export default function TodoCard(props) {
    const { children } = props
  return (
    <li className="todoItem">
        {children}
        <div className="actionsContainer"> 
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <i class="fa fa-trash" aria-hidden="true"></i>
        </div>
    </li>
    
  )
}
