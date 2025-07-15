import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 pt-2 pb-2 ${
                scrollY > 50 
                    ? 'glass-morphism-dark backdrop-blur-xl border-b border-cyan-400/20' 
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Enhanced Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                {/* Main logo */}
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center glow-border group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-black font-black text-lg">AI</span>
                                </div>
                                {/* Holographic overlay */}
                                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-xl blur-sm animate-pulse"></div>
                                {/* Orbiting elements */}
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-spin"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    AI NEXUS
                                </span>
                                <span className="text-xs text-cyan-300 -mt-1 tracking-wider">WEB3 TOOLS</span>
                            </div>
                        </Link>
                    </div>

                    {/* Enhanced Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {[
                                { path: '/', label: 'Home', icon: '🏠' },
                                { path: '/tools', label: 'Tools', icon: '⚡' },
                                { path: '/about', label: 'About', icon: '🔮' },
                                { path: '/contact', label: 'Contact', icon: '🌐' }
                            ].map(({ path, label, icon }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`group relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                                        isActive(path)
                                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 neon-border-animation'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <span className="text-base">{icon}</span>
                                    <span className={isActive(path) ? '' : ''}>{label}</span>
                                    {isActive(path) && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-lg animate-pulse"></div>
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                                        </>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <div className="hidden md:block">
                        <button className="group relative overflow-hidden px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-600 text-black hover:shadow-lg hover:shadow-cyan-400/25">
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            
                            {/* Floating particles */}
                            <div className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
                            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-75 transition-opacity"></div>
                            
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>Launch</span>
                                <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Enhanced Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-cyan-400 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 relative group"
                        >
                            <div className={`w-6 h-6 flex flex-col justify-center items-center transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Enhanced Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-2 glass-morphism-dark rounded-xl mt-2 border border-cyan-400/20 backdrop-blur-xl">
                            {[
                                { path: '/', label: 'Home', icon: '🏠' },
                                { path: '/tools', label: 'Tools', icon: '⚡' },
                                { path: '/about', label: 'About', icon: '🔮' },
                                { path: '/contact', label: 'Contact', icon: '🌐' }
                            ].map(({ path, label, icon }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                        isActive(path)
                                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 glow-text'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                    {isActive(path) && (
                                        <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                    )}
                                </Link>
                            ))}
                            {/* Mobile CTA */}
                            <div className="pt-4 mt-4 border-t border-cyan-400/20">
                                <button className="btn-ghost w-full flex items-center justify-center space-x-2">
                                    <span>🚀</span>
                                    <span>Launch App</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
