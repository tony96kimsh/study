import { useState } from 'react'
import TodoList from './TodoList'
import './App.css'

function App() { 
  return ( 
    <div className = "title">
        <TodoList title = "오늘 할일" />
    </div>
  )
}

export default App


