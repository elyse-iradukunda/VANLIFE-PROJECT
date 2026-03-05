import Footer from './components/Footer'
import Content from './components/Content'
import Header from './components/Header'
import "./server"

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Vans from './components/vans'
import VanDetail from './components/VanDetail'
import Layout from './components/Layout'
import Dashboard from './Host/Dashboard'
import Income from './Host/Income'
import Reviews from './Host/Reviews'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7ED] font-sans">
       <Header/>
             <Routes>

               <Route element ={
                <Layout/>
               }>

                    <Route path='/about' element={<Content/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/vans" element ={<Vans/>} />
                    <Route path="/vans/:id" element ={<VanDetail/>} />
                    <Route path="/host" element ={ <Dashboard/>} />
                    <Route path="/host/income" element ={ <Income/>} />
                    <Route path="/host/reviews" element ={ <Reviews/>} />
               </Route>

              </Routes>
              <br />
        <Footer/>
    </div>




  )
}

export default App