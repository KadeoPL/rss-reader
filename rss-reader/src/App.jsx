import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchArticles } from "./redux/slices/articlesSlices";

function App() {
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch])
  
  return (
    <>
    <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  )
}

export default App