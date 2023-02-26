import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Header from "./components/Header"

export function RoutesMap() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pokemon/:id" element={<Pokemon />}/>
            </Routes>
        </BrowserRouter>
    );
}