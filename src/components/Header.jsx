import { Link } from 'react-router-dom'
export default function Header(){

    return(
   <>
   
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

        
   
   </>

    )
}