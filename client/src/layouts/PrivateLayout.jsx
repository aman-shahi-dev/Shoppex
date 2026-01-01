
import Navbar from "../components/UI/Navbar.jsx";

import { Outlet } from "react-router-dom";

function PrivateLayout() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
        
        <Navbar/>

        <main className="w-full flex flex-col flex-1 min-h-0 mx-auto">
            <Outlet/>
        </main>

    </div>
  )
}

export default PrivateLayout;