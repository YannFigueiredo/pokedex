import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

export function RoutesMap() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pokemon/:id" element={<Pokemon />}/>
            </Routes>
        </BrowserRouter>
    );
}