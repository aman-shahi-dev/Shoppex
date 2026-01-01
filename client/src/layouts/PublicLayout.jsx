
import Navbar from "../components/UI/Navbar.jsx"
import { Outlet } from "react-router-dom"

function PublicLayout() {
  return (
    <div className="flex flex-col h-dvh bg-background text-foreground overflow-hidden">
        
        <Navbar/>

        <main className="w-full flex flex-col flex-1 min-h-0 mx-auto font-wenkai custom-scrollbar">
            <Outlet/>
        </main>

    </div>
  )
}

export default PublicLayout;