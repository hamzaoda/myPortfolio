import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="App">
                <Pages />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
