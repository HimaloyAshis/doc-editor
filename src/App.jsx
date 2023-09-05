import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Editor from './component/Editor/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Editor></Editor>
    </>
  )
}

export default App
