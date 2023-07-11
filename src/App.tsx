import { Pokemons } from "./components/Pokemons";
import { Pokemon } from "./components/Pokemon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/:pokemonName" element={<Pokemon />} />
      </Routes>
    </Router>
  );
};

export default App;
