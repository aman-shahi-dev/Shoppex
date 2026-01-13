
import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ThemeProvider( { children } ){
    // Stores: 'light', 'dark', 'system'
    const [theme, setTheme] = useState('system')

    // Track mounted state so UI don't flicker on first load
    const [isMounted, setIsMounted] = useState(false)

    // Function to determine if system is in dark mode
    const getSystemTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
            ? 'dark' 
            : 'light'   
    }

    // Apply theme to <html> tag
    const applyTheme = (value) => {

        const root = document.documentElement

        const actualTheme = value === 'system' ? getSystemTheme() : value

        if(actualTheme === 'dark'){
            root.classList.add('dark')
        } else{
            root.classList.remove('dark')
        }
    }

    // Load theme from localStorage on first mount
    useEffect( () => {
        const savedTheme = localStorage.getItem('theme')

        if(savedTheme){
            setTheme(savedTheme)
        } else{
            applyTheme('system') // only for default load
        }

        setIsMounted(true)
    }, [] )

    // Update theme when state changes
    useEffect( () => {
        if(!isMounted) return

        localStorage.setItem('theme', theme)
        applyTheme(theme)
    }, [theme, isMounted] )

    // Watch for system theme changes when 'system' mode is active
    useEffect( () => {
        
        if(theme !== 'system') return
        
        const media = window.matchMedia('(prefers-color-scheme: dark)')

        const handler = () => applyTheme('system')

        media.addEventListener('change', handler)

        return () => media.removeEventListener('change', handler)
    }, [theme] )

    // Toggle theme (simple user interaction)
    const toggleTheme = () => {
        setTheme( (prev) => prev === 'dark' ? 'light' : prev === 'light' ? 'system' : 'dark' )
    }

    const value = {
        theme,
        setTheme,
        toggleTheme,
    }


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;