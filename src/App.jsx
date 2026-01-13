import { HashRouter, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        {PublicRoutes()}
        {PrivateRoutes()}
      </Routes>
    </HashRouter>
  );
}

export default App;
