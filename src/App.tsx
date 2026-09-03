import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="header bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-4">
              <h1 className="text-2xl font-bold text-gray-900">Blog Frontend</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Post</h2>
        </main>
    </div>
    </>
  )
}

export default App
