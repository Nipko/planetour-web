import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechnologyPage from './pages/TechnologyPage';
import DestinationsPage from './pages/DestinationsPage';
import TrainingPage from './pages/TrainingPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/technology" element={<TechnologyPage />} />
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
