
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'
import { ShoppingCart, Sun, Moon } from 'lucide-react';

import MobileMenu from './MobileMenu.jsx'

function Navbar() {

    const { theme, toggleTheme } = useTheme()
    const [open, setOpen] = useState(false) 

    return (
        <header className="w-full border-b bg-navbarBackground text-foreground font-wenkai">

            <div className='max-w-6xl mx-auto px-4 h-16 flex items-center justify-between '>
                
                {/* Left - Logo */}
                <Link 
                    to='/'
                    className='text-xl md:text-3xl font-bold'
                >
                    Shoppex
                </Link>



                {/* Center Nav Links (Hidden on Mobile) */}
                <nav className='hidden md:flex md:items-center md:mt-2 md:justify-center gap-10 font-jost'>
                    <Link 
                        to='/' 
                        className='hover:text-primary transition hover:scale-110 duration-50'
                    >
                        Home
                    </Link>

                    <Link 
                        to='/products' 
                        className='hover:text-primary transition hover:scale-110 duration-50'
                    >
                        Products
                    </Link>

                    <Link 
                        to='/ourstory' 
                        className='hover:text-primary transition hover:scale-110 duration-50'
                    >
                        Our Story
                    </Link>

                    <Link 
                        to='/contact' 
                        className='hover:text-primary transition hover:scale-110 duration-50'
                    >
                        Contact Us
                    </Link>

                </nav>

                {/* Hidden on Mobile */}
                {/* Right - Actions */}
                <div className='hidden md:flex items-center gap-4'>

                    {/* Theme Toggle Button */}
                    <button 
                        onClick={toggleTheme}
                        className='px-2 py-1 rounded cursor-pointer'
                    >
                        {
                            theme === 'dark' ? <Sun />
                            : theme === 'light' ? <Moon />
                            : 'System'
                        }
                    </button>

                    <Link 
                        to='/cart' 
                        className='px-3 py-1 rounded'
                    >
                        <ShoppingCart />
                    </Link>

                    <Link
                        to='/signin'
                        className='px-3 py-1 border border-border rounded'
                    >
                        Sign In
                    </Link>

                    <Link
                        to='/signup'
                        className='
                            px-3 py-1 
                            rounded 
                            border border-foreground/50 
                            hover:bg-foreground hover:text-navbarBackground transition-colors
                        '
                    >
                        Sign Up
                    </Link>

                </div>



                {/* Mobile Menu Button */}
                <div className='md:hidden flex items-center justify-between'>

                    <button 
                        onClick={toggleTheme}
                        className='px-2 py-1 rounded cursor-pointer'
                    >
                        {
                            theme === 'dark' ? <Sun />
                            : theme === 'light' ? <Moon />
                            : 'System'
                        }
                    </button>

                    <Link 
                        to='/cart' 
                        className='px-3 py-1 rounded'
                    >
                        <ShoppingCart />
                    </Link>


                    <button
                        onClick={ () => setOpen(true) }
                        className='md:hidden px-3 py-1 text-2xl mt-1 rounded '
                    >
                        ☰
                    </button>

                </div>

            </div>

            {/* Mobile Sidebar */}
            <MobileMenu open={open} setOpen={setOpen} toggleTheme={toggleTheme} theme={theme} />

        </header>
    )
}

export default Navbar;