import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
}
export const Pokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then((res: Response) => res.json())
      .then((data: { results: Pokemon[] }) => {
        setPokemons(data.results);
      });
  }, []);
  return (
    <div>
      <ul>
        {pokemons.map((item: Pokemon) => (
          <li key={item.name}>
            <Link to={`/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
