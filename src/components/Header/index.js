import Pokeball from "../../assets/images/pokeball.svg";
import "./styles.css";

export default function Header() {
    return(
        <header className="header">
            <div className="header-logo"><img src={Pokeball} alt="Logo"/></div>
            <h1 className="header-title">Pokédex</h1>
        </header>
    );
}