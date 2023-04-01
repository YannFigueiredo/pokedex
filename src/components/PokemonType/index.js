import "./styles.css";

export default function PokemonType({ pokemonType }) {
    return (
        <div className={`type ${pokemonType}`}>
            <span className="type-text">
                {pokemonType}
            </span>
        </div>
    );
}