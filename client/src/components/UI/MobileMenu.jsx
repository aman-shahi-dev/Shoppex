
import { Link } from "react-router-dom";
import { Sun, Moon } from 'lucide-react';

function MobileMenu({ open, setOpen }) {
  return (
    // 1. WRAPPER: Covers the whole screen, manages pointer events
    <div className={`fixed inset-0 z-50 flex justify-end ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      
      {/* 2. OVERLAY: The dark background (Click to close) */}
      <div 
         className={`
           fixed inset-0 
           bg-black/50 backdrop-blur-sm 
           transition-opacity duration-300 
           ${open ? 'opacity-100' : 'opacity-0'}
         `} 
         onClick={() => setOpen(false)}
      />

      {/* 3. DRAWER: The actual menu content */}
      <div
        className={`
            relative h-dvh w-64 
            bg-background 
            border-l border-border 
            shadow-2xl 
            transform transition-transform duration-300
            ${open ? 'translate-x-0' : 'translate-x-full'}
            `}
      >
        
        {/* --- HEADER --- */}
        <div className="flex justify-between items-center px-4 py-3.5 border-b border-border bg-navbarBackground/10">
            <h2 className="text-lg font-semibold text-foreground">Menu</h2>
            <button 
                className="text-xl p-1 rounded hover:bg-muted transition"
                onClick={() => setOpen(false)}
            >
                ✕
            </button>
        </div>

        {/* --- LINKS --- */}
        <nav className="flex flex-col gap-4 p-4 text-center">
            <Link to='/' onClick={() => setOpen(false)} className="hover:text-primary border-b border-border pb-2">
                Home
            </Link>
            <Link to='/products' onClick={() => setOpen(false)} className="hover:text-primary border-b border-border pb-2">
                Products
            </Link>
            <Link to='/cart' onClick={() => setOpen(false)} className="hover:text-primary border-b border-border pb-2">
                Cart
            </Link>
            <Link to='/ourstory' onClick={() => setOpen(false)} className="hover:text-primary border-b border-border pb-2">
                Our Story
            </Link>
            <Link to='/contact' onClick={() => setOpen(false)} className="hover:text-primary border-b border-border pb-2">
                Contact Us
            </Link>
        </nav>

        {/* --- AUTH BUTTONS --- */}
        <div className="flex items-center justify-around mx-auto mt-10">
            <Link to='/signin' onClick={() => setOpen(false)} className="hover:text-primary border border-border rounded px-4 py-2">
                Sign In
            </Link>
            <Link to='/signup' onClick={() => setOpen(false)} className="hover:text-primary border border-border rounded px-4 py-2">
                Sign Up
            </Link>
        </div>

        

      </div>
    </div>
  )
}

export default MobileMenu;