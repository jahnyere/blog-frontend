import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Post from './components/Post'


function App() {

  return (

      <div className="min-h-screen bg-gray-100">
       <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>

    </div>

  )
}

export default App
