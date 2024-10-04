import { useState } from 'react'
import './App.css'

function App() {

  const [query, setQuery] = useState('');
  
  return (
    <>
      <h1>Wiki Wander</h1>
      <input placeholder='Search...' value={query}
      onChange={(e) => setQuery(e.target.value)}
      />
    </>
  )
}

export default App
