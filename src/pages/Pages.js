import React from "react";
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience.js';
import Projects from './Projects';
import ProjectDisplay from './ProjectDisplay'

function Pages() {
    return (
        <div>
            <Routes>
            <Route to="/myPortfolio/" element={<Home />}/>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDisplay />} />
                <Route path="/experience" element={<Experience />} />
                
            </Routes>
        </div>
    );
}

export default Pages;
