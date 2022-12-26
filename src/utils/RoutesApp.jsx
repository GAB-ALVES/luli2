import {Routes, Route, HashRouter} from "react-router-dom";

// Pages
import { Home } from "../pages/Home/Home";
import Request from "../pages/Request/Request";

function RoutesApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path="*" element={<Home/>} />
                <Route path="/req" element={<Request/>} />
            </Routes>
        </HashRouter>
    )
}

export {RoutesApp}