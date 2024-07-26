import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { fetchArticles } from "./redux/slices/articlesSlices";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchArticles());

  return (
    <div className="min-h-screen bg-slate-200 ">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
