import { useState, useEffect } from "react";
import "./styles.css";

export default function PokemonType({ pokemonType }) {
    const [colorClass, setColorClass] = useState();

    useEffect(() => {
        switch (pokemonType) {
            case "bug":
                setColorClass("bug");
                break;
            case "dark":
                setColorClass("dark");
                break;
            case "dragon":
                setColorClass("dragon");
                break;
            case "electric":
                setColorClass("electric");
                break;
            case "fairy":
                setColorClass("fairy");
                break;
            case "fighting":
                setColorClass("fighting");
                break;
            case "fire":
                setColorClass("fire");
                break;
            case "flying":
                setColorClass("flying");
                break;
            case "ghost":
                setColorClass("ghost");
                break;
            case "normal":
                setColorClass("normal");
                break;
            case "grass":
                setColorClass("grass");
                break;
            case "ground":
                setColorClass("ground");
                break;
            case "ice":
                setColorClass("ice");
                break;
            case "poison":
                setColorClass("poison");
                break;
            case "psychic":
                setColorClass("psychic");
                break;
            case "rock":
                setColorClass("rock");
                break;
            case "steel":
                setColorClass("steel");
                break;
            case "water":
                setColorClass("water");
                break;
            default:
                break;
        }
    }, [pokemonType]);

    return (
        <div className={`type ${colorClass}`}>
            <span className="type-text">
                {pokemonType}
            </span>
        </div>
    );
}