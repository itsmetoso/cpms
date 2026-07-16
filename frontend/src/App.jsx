import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>CPMS Dashboard</h1>
      <p>Frontend is running ✅</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
