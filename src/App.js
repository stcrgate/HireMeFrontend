import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AddJob from "./components/AddJob";
import ViewJob from "./components/ViewJob";
import Admin from "./components/Admin";
import UpdateJob from "./components/UpdateJob";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <>
                <Router>
                    <AuthProvider>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/add" element={<AddJob />} />
                            <Route path="/view" element={<ViewJob />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/update" element={<UpdateJob />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </AuthProvider>
                </Router>
            </>
        </div>
    );
}

export default App;
