import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Editor } from './Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Editor />
    </div>
  )
}

export default App
