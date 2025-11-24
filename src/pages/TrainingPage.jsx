import React from 'react';
import Navbar from '../components/Navbar';
import Training from '../components/Training';
import Footer from '../components/Footer';

const TrainingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20">
                <Training />
            </div>
            <Footer />
        </div>
    );
};

export default TrainingPage;
