import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <section className="flex flex-col justify-center items-center text-center px-6 py-32 bg-[#FFF7ED] min-h-[80vh]">
            <h1 className="text-4xl font-bold text-[#161616] leading-tight">
                Sorry, the page you were looking for was not found.
            </h1>
            <Link 
                to="/" 
                className="mt-8 bg-[#161616] text-white w-full max-w-md py-4 rounded-md font-bold text-lg hover:bg-black transition-colors"
            >
                Return to home
            </Link>
        </section>
    )
}