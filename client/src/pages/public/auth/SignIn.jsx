import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="
      h-full w-full 
      flex items-center justify-center 
      p-4
    ">

      {/* --- GLASS CARD --- */}
      <div className="
        w-full max-w-md
        /* Theme: Dark Glass in Light Mode, Card in Dark Mode */
        bg-black/20 dark:bg-card/50
        backdrop-blur-md
        border border-white/10
        
        rounded-2xl 
        p-6
        shadow-2xl
        flex flex-col gap-6
      ">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-wenkai font-bold text-white">
            Shoppex
          </h1>
          <p className="text-white/60 text-sm md:text-lg">
            Welcome back! Please sign in.
          </p>
        </div>

        <form className="flex flex-col gap-2">
          
          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] md:text-lg uppercase font-bold tracking-wide text-white/70 ml-1">
              Email Address
            </label>
            <input 
              type="text" 
              placeholder="john@example.com" 
              className="
                w-full p-3 rounded-lg
                /* Dark Input Slots */
                bg-black/20 dark:bg-black/40 
                border border-white/10
                text-white placeholder:text-white/40
                focus:outline-none focus:ring-2 focus:ring-cta/50
                transition-all
              " 
            />
          </div>
          
          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] md:text-lg uppercase font-bold tracking-wide text-white/70 ml-1">
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="
                w-full p-3 rounded-lg
                bg-black/20 dark:bg-black/40 
                border border-white/10
                text-white placeholder:text-white/40
                focus:outline-none focus:ring-2 focus:ring-cta/50
                transition-all
              " 
            />
          </div>

          {/* Action Button */}
          <button
            className="
              w-full py-3 mt-4
              bg-cta text-white font-bold rounded-lg
              shadow-lg
              hover:scale-[1.02] active:scale-95
              transition-all duration-200 ease-in-out
              cursor-pointer
            "
          >
            Sign In
          </button>

        </form>

        {/* Footer Links */}
        <div className='text-center text-sm md:text-lg text-white/70'>
          Don't have an account?{' '}
          <Link 
            to='/signup' 
            className='
              text-pink-300/80 font-bold 
              hover:text-white hover:underline 
              transition-colors
            '
          >
            Sign Up
          </Link>
        </div>

      </div>

    </div>
  )
}

export default SignIn;