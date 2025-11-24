import React from 'react';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20">
                <Blog />
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;
