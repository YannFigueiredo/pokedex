import Pokeball from "../../assets/images/pokeball.svg";
import "./styles.css";

export default function Header() {
    return(
        <header className="header">
            <img className="header-logo" src={Pokeball} alt="Logo"/>
            <h1 className="header-title">Pokédex</h1>
        </header>
    );
}