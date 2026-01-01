
import { BrowserRouter, Routes } from "react-router-dom"
import PublicRoutes from "./routes/PublicRoutes.jsx"
import PrivateRoutes from "./routes/PrivateRoutes.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes()}
        {PrivateRoutes()}
      </Routes>
    </BrowserRouter>
  )
}

export default App
