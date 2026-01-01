
import ImageSlider from "../../components/Animations/ImageSlider"

import { Link } from 'react-router-dom'

function Home() {

  const heroImages = [
    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1577909687863-91bb3ec12db5?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1526816619231-e426e697193e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1595464268210-89d683ca5038?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
  
    <div
      className='flex flex-col items-center md:flex-row flex-1 items-center md:px-2'
    >
      <div 
        className="
          w-full max-w-2xl md:max-w-4xl 
          p-4 md:px-12 md:py-1 mt-4 mb-4 md:mb-0 md:mt-0 
        "
      >
        <ImageSlider images={heroImages} />
      </div>

      <div className="flex flex-col items-center text-center md:mr-10">

        <h1 className="text-3xl md:text-6xl font-bold text-shadow-lg mb-4 md:mb-6 whitespace-nowrap uppercase tracking-widest font-light">Welcome to Shoppex</h1>
        
        <p className="text-sm md:text-xl text-shadow-lg ">Browse our latest collections.</p>        

        {/* CTA */}
        <Link 
          className="
            mt-10 
            py-2 px-6 md:py-4 md:px-12 text-md md:text-xl 
            rounded-md
            hover:scale-110 
            hover:cursor-pointer
            transition duration-100 
            active:scale-95
            bg-cta
            hover:-translate-y-1 hover:translate-x-1 
            hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
          "

          to='/products'
        >
          Shop Now
        </Link>
      </div>
            
    </div>
  
)
}

export default Home;