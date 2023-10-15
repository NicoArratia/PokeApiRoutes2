import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Character.css"

const Pokemon = () => {
    const [pokemones, setPokemon] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState("");
    const navigate = useNavigate();

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

    const getPokemon = async () => {
        console.log(url);
        const res = await fetch(url);
        const { results } = await res.json();

        setPokemon(results);
    };

    const irPokeDetail = async () => {
        if (pokemonSelected) navigate(`/pokemones/${pokemonSelected}`);
        else alert("Selecciona tu Pokemon");
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <>
            <div className="SelectForm">
                <h2 className="TitleC">Selecciona de la primera generación</h2>
                <div className="">
                    <Form.Select
                        value={pokemonSelected}
                        className="mb-3"
                        onChange={(e) => setPokemonSelected(e.target.value)}>
                        <option value="" disabled>
                            Lista de pokémon
                        </option>
                        {pokemones.map(({ name }, i) => (
                            <option key={i} value={name}>
                                {name}
                            </option>
                        ))}
                    </Form.Select>
                </div>
                <Button className="m-3" variant="warning" onClick={irPokeDetail}>Seleccionar</Button>
            </div>
        </>
    );
};

export default Pokemon;
