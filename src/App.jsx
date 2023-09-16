import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Favorites from "./pages/Favorites";
import NotFound from './pages/NotFound'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<MovieDetailsPage />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound/> }/>
    </Routes>
  );
}

export default App;
