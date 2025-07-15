import React from 'react';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return (
        <main className="flex-1 bg-black relative overflow-hidden">
            {/* Enhanced background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            
            {/* Animated background elements with improved Web3 styling */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/2 rounded-full blur-3xl animate-pulse delay-2000"></div>
                
                {/* Moving particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 4}s`
                        }}
                    />
                ))}
                
                {/* Grid pattern overlay */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Content container with enhanced spacing */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default MainPage;
