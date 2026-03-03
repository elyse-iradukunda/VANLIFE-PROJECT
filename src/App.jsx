import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Content from './components/Content'
import "./server"
import Vans from './components/vans'
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7ED] font-sans">
      <nav className="flex justify-between items-center px-6 py-8 md:px-10">
        <Link className="font-black text-2xl tracking-tighter" to="/home">
          #VANLIFE
        </Link>
        <div className="flex gap-6 font-semibold text-[#4D4D4D]">
          <Link className="underline decoration-2 underline-offset-4 text-black" to="/about">
            About
          </Link>
          <Link className="hover:text-black transition-colors" to="/vans">
            Vans
          </Link>
        </div>
      </nav>

       <Content/>
        <Footer/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element ={<Vans/>} />
        </Routes>
    </div>
  )
}

export default App