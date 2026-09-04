import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
       <Navbar />

        <main className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Post</h2>
        </main>
    </div>
    </>
  )
}

export default App
