import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

export default function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);