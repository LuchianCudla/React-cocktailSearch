import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import SingleCocktail from "./SingleCocktail";
import NavBar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/React-cocktailSearch" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
