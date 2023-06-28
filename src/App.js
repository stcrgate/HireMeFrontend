import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AddJob from "./components/AddJob";
import ViewJob from "./components/ViewJob";
import Admin from "./components/Admin";

function App() {
    return (
        <div className="App">
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/add" element={<AddJob />} />
                        <Route path="/view" element={<ViewJob />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </Router>
            </>
        </div>
    );
}

export default App;
