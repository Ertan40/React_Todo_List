import TodoInput from "./components/TodoInput" 
import TodoList from "./components/TodoList"
import TodoCard from "./components/TodoCard"
import { useState, useEffect } from 'react' 

function App() {
//   let todos = [
//     'Go to the gym',
//     'Go to the shopping center',
//     'Do not forget to pick up the kid from school'
// ] 
// Used useState instead above
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData (newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData (newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex !== index
      })
      persistData (newTodoList)
      setTodos (newTodoList)
  }

  function handleEditTodo (index) {
      const itemToBeEdited = todos[index]
      setTodoValue(itemToBeEdited)
      handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return 
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
