import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-2xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
      <p className="text-gray-700">This is a sample JSX file using Tailwind CSS.</p>
    </>
  )
}

export default App
