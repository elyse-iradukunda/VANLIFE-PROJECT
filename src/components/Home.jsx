import img from "/home-pic.png"

const imageUrl = {img}; 

function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
    
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 text-center space-y-8 max-w-4xl px-4">
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          You got the travel plans, <span className="block md:inline">we got the travel vans.</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>

        <div className="mt-12 flex justify-center">
            <button className="bg-[#ff8f3f] hover:bg-[#e67e30] text-black font-semibold text-lg py-4 px-10 rounded-lg shadow-lg transition-colors duration-200">
                Find your van
            </button>
        </div>
      </div>

     
    </div>
  );
}

export default Home;