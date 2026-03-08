import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="hero bg-blue-500 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Produk Kami</h1>
                <p className="text-lg">Temukan produk terbaik untuk kebutuhan Anda</p>
            </div>
        </section>
    );
};

export default HeroSection;