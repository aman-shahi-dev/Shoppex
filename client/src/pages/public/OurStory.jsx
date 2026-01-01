
function OurStory() {
  return (
    <div className="
      h-full w-full 
      overflow-y-auto custom-scrollbar 
    ">
      
      <div className="
        min-h-full w-full
        flex items-center justify-center 
        py-1 px-2       
      ">
        
        <div className="
          max-w-6xl w-full
          flex flex-col md:flex-row items-center md:justify-evenly
          gap-4 md:gap-8
      
          bg-black/20 dark:bg-card/50
          backdrop-blur-md
          border border-white/10
          rounded-2xl 
          p-6 md:p-12
          shadow-xl
          text-center
        ">
          
          <div className="
            flex flex-col items-center 
            gap-6 shrink-0
            
            /* DESKTOP STYLING: A subtle 'Profile Card' look */
            md:rounded-2xl 
            md:p-8
            md:bg-gradient-to-b md:from-black/30 md:to-purple-900/20
            md:border md:border-white/5
            md:shadow-inner
          ">

      {/* 1. IMAGE CONTAINER */}
      <div className="relative group">
        
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cta to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        
        <img 
            src="https://images.unsplash.com/photo-1565538534766-87c0206acfef?q=80&w=1581&auto=format&fit=crop" 
            alt="Aman Shahi - Founder" 
            className="
                relative
                object-cover 
                w-23 h-23 md:w-56 md:h-56 
                rounded-full 
                border-4 border-white/10 
                shadow-2xl
            " 
          />
      </div>

        {/* 2. TEXT CONTENT */}
        <div className="text-center space-y-1.5 md:space-y-3">
            <h1 className="font-wenkai font-bold text-3xl md:text-5xl text-white">
                Aman Shahi
            </h1>
            <p className="font-bold text-xs md:text-sm uppercase tracking-[0.2em] text-pink-300/80">
                Founder of Shoppex
            </p>
        </div>

    </div>

          {/* Divider Line */}
          <div className="w-16 md:hidden h-1 bg-white/10 rounded-full shrink-0"></div>

          <p className="
              text-white/80 
              leading-relaxed 
              text-sm md:text-lg 
              max-w-2xl
          ">
            I started Shoppex with a simple idea: 
            <span className="text-pink-400 font-semibold block mt-2 mb-2 md:mb-4 text-lg md:text-2xl font-wenkai">
              "Shopping shouldn't be complicated."
            </span>
            
            I noticed that many e-commerce sites are cluttered with data, making the experience overwhelming. 
            My goal with Shoppex was to build a platform where the UI is clean and the experience is so smooth 
            that you can find exactly what you need <strong className="text-pink-300/80">without any hesitation</strong>.
          </p>

        </div>
      </div>
    </div>
  )
}

export default OurStory;