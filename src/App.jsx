import "./server"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

import Layout from './components/Layout'
import Home from './components/Home'
import Content from './components/Content'
import Error from "./components/Error"

import Vans, { loader as vansLoader } from './components/Vans'
import VanDetail from './components/VanDetail'
import Dashboard from './Host/Dashboard'
import Income from './Host/Income'
import Reviews from './Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './Host/HostVans'
import HostVansDetails from './Host/HostVansDetails'
import HostVanInfo from './Host/HostVanInfo'
import HostVanPricing from './Host/HostVanPricing'
import HostVanPhotos from './Host/HostVanPhotos'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<Error />}>

      <Route index element={<Home />} />
      <Route path="about" element={<Content />} />

      <Route path="vans">
        <Route 
          index
          element={<Vans />}
          loader={vansLoader}
        />
        <Route path=":id" element={<VanDetail />} />
      </Route>

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />

        <Route path="vans/:id" element={<HostVansDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />

    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App