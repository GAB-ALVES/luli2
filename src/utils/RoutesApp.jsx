import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

// Pages
import { Home } from "../pages/Home/Home";
import Request from "../pages/Request/Request";

function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="Request" element={<Request/>} />
            </Routes>
        </Router>
    )
}

export {RoutesApp}