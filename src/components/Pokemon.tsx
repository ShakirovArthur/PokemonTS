import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

interface PokemonInfo {
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  name: string;
  id: number;
  height: number;
  sprites: {};
}

export const Pokemon = () => {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  const [pokemon, setPokemon] = useState<PokemonInfo | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((res: Response) => res.json())
      .then((data: PokemonInfo) => {
        setPokemon(data);
      });
  }, [pokemonName]);
  const pokemonImages = useMemo(() => {
    return pokemon ? Object.values(pokemon?.sprites).splice(0, 8) : [];
  }, [pokemon]);

  return (
    <div className="pokemon">
      <ul>
        <li>name:{pokemon?.name}</li>
        <li>id:{pokemon?.id}</li>
        <li>height:{pokemon?.height}</li>
        {pokemon?.abilities.map((item) => (
          <li>ability:{item.ability.name}</li>
        ))}
      </ul>
      {pokemonImages.map(
        (item) => typeof item === "string" && <img src={item} alt="" />
      )}
      <Link to="/">Назад</Link>
    </div>
  );
};
