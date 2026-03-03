import Footer from './components/Footer'
import Content from './components/Content'
import Header from './components/Header'
import "./server"

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Vans from './components/vans'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7ED] font-sans">
       <Header/>
             <Routes>

                    <Route path='/about' element={<Content/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/vans" element ={<Vans/>} />

              </Routes>
              <br />
        <Footer/>
    </div>




  )
}

export default App