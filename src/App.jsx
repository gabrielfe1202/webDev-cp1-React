import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Welcome } from './pages/Home';
import Navbar from './componets/Navbar';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('mudou')
  }, [count])

  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Welcome" element={<Welcome />} />              
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
