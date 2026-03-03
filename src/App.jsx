import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

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

           <div className="w-full">
        <img 
          src="/car.png" 
          alt="Van at night" 
          className="w-full block object-cover max-h-[450px]" 
        />
      </div>

      <main className="flex-grow px-7 py-12 max-w-[600px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#161616] mb-8">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>

        <div className="space-y-6 text-[#161616] font-medium leading-relaxed text-lg">
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. 
            Our vans are recertified before each trip to ensure your travel plans can 
            go off without a hitch. <br />
            <span className="text-sm italic">(Hitch costs extra 😉)</span>
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic 
            of touring the world on 4 wheels.
          </p>
        </div>

        <div className="mt-14 bg-[#FFCC8D] p-9 rounded-md shadow-sm">
          <h2 className="text-2xl font-bold text-[#161616] mb-6 leading-tight">
            Your destination is waiting.<br />
            Your van is ready.
          </h2>
          <button className="bg-[#161616] text-white font-bold py-4 px-8 rounded-lg hover:bg-black transition-all text-base">
            Explore our vans
          </button>
        </div>
      </main>

      <footer className="bg-[#252525] text-[#AAAAAA] py-7 text-center text-sm">
        &copy; 2022 #VANLIFE
      </footer>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App