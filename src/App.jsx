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
import HostLayout from './components/HostLayout'
import HostVans from './Host/HostVans'
import HostVansDetails from './Host/HostVansDetails'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7ED] font-sans">
       <Header/>
             <Routes>


               <Route path='/' element ={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path='/about' element={<Content/>} />

                   <Route path="/vans">
                    <Route index element ={<Vans/>} />
                    <Route path=":id" element ={<VanDetail/>} />
                  </Route> 


                    <Route path="host" element ={ <HostLayout />} >
                       <Route index element ={ <Dashboard/>} />
                       <Route path="income" element ={ <Income/>} />
                       <Route path="reviews" element ={ <Reviews/>} />
                       <Route path="vans" element ={ <HostVans/>} />
                       <Route path="vans/:id" element ={ <HostVans/>} />
                    </Route>

               </Route>

              </Routes>
              <br />
        <Footer/>
    </div>




  )
}

export default App