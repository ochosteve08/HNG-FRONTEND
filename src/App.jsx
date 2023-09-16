import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./Components/MovieDetail";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App
