import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage';
import VantaBackground from './VantaBackground';

// Enhanced Web3-inspired components with advanced animations
const HomePage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <VantaBackground>
            <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Floating Particles */}
            {/* // Enhanced particle effect with Web3 styling */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>

                {/* Hero Section */}
                <div className="text-center py-20 px-4 relative z-20 max-w-7xl mx-auto">
                    {/* Main Title with Advanced Effects */}
                    <div className="mb-12 relative">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 relative">
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent float-animation">
                                AI NEXUS
                            </span>
                            {/* Hologram effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 bg-clip-text text-transparent blur-lg animate-pulse hologram-effect"></div>
                            {/* Floating elements around title */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-400 rotate-45 animate-spin"></div>
                            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
                            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 transform rotate-45 animate-pulse"></div>
                        </h1>
                        
                        {/* Subtitle with animated border */}
                        <div className="flex items-center justify-center space-x-4 mb-8">
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32 animate-pulse"></div>
                            <span className="text-cyan-400 font-bold tracking-widest text-lg neon-border-animation px-4 py-2 rounded-full border border-cyan-400/30">
                                WEB3 AI REVOLUTION
                            </span>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Enhanced Description */}
                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
                        Experience the convergence of{' '}
                        <span className="text-cyan-400 font-semibold">Artificial Intelligence</span> and{' '}
                        <span className="text-purple-500 font-semibold">Blockchain Technology</span>.
                        <br className="hidden md:block" />
                        Build the future with next-generation{' '}
                        <span className="text-pink-500 font-semibold">Decentralized Tools</span>.
                    </p>

                    {/* Enhanced CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
                        <button className="btn-primary group flex items-center space-x-3">
                            <span className="text-2xl">🚀</span>
                            <span>Launch Tools</span>
                        </button>
                        
                        <button className="btn-secondary group flex items-center space-x-3">
                            <span className="text-2xl float-animation">📚</span>
                            <span>Explore Docs</span>
                            <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    {/* Enhanced Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                        {[
                            { 
                                icon: '🤖', 
                                title: 'AI-Powered', 
                                desc: 'Advanced neural networks and machine learning algorithms',
                                color: 'cyan',
                                gradient: 'from-cyan-400 to-blue-600'
                            },
                            { 
                                icon: '🔗', 
                                title: 'Blockchain Native', 
                                desc: 'Built for decentralized ecosystems and Web3 integration',
                                color: 'purple',
                                gradient: 'from-purple-500 to-indigo-600'
                            },
                            { 
                                icon: '⚡', 
                                title: 'Lightning Speed', 
                                desc: 'Optimized for peak performance and scalability',
                                color: 'pink',
                                gradient: 'from-pink-500 to-red-600'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group relative">
                                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
                                <div className="relative glass-morphism-dark p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                                    <div className="text-6xl mb-6 float-animation">{feature.icon}</div>
                                    <h3 className={`text-2xl font-bold text-${feature.color}-400 mb-4`}>{feature.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{feature.desc}</p>
                                    {/* Decorative elements */}
                                    <div className={`absolute top-4 right-4 w-2 h-2 bg-${feature.color}-400 rounded-full animate-pulse`}></div>
                                    <div className={`absolute bottom-4 left-4 w-1 h-1 bg-${feature.color}-600 rounded-full animate-ping`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { value: '50K+', label: 'Active Users', icon: '👥' },
                            { value: '100+', label: 'AI Models', icon: '🧠' },
                            { value: '99.9%', label: 'Uptime', icon: '⚡' },
                            { value: '24/7', label: 'Support', icon: '🛟' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-xl mb-2 float-animation">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-3">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-2 group-hover:via-cyan-400 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mouse follower effect */}
                <div 
                    className="fixed pointer-events-none w-4 h-4 bg-cyan-400/30 rounded-full blur-sm transition-all duration-300 z-50"
                    style={{
                        left: mousePosition.x - 8,
                        top: mousePosition.y - 8,
                    }}
                />
            </div>
        </VantaBackground>
    );
};

const ToolsPage = () => (
    <div className="py-16 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10">
            <div className="text-center mb-20">            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
                AI Tool Arsenal
            </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                    Discover our comprehensive suite of AI-powered tools designed for the Web3 ecosystem
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                    { icon: '🧠', title: 'Neural Networks', desc: 'Deep learning models for complex problem solving', status: 'Active', color: 'cyan' },
                    { icon: '🔮', title: 'Predictive Analytics', desc: 'Future trend analysis and market forecasting', status: 'Beta', color: 'purple' },
                    { icon: '🎨', title: 'Creative AI', desc: 'Generate art, music, and creative content', status: 'Coming Soon', color: 'pink' },
                    { icon: '💬', title: 'Smart Contracts', desc: 'AI-powered blockchain development tools', status: 'Active', color: 'green' },
                    { icon: '🔍', title: 'Data Mining', desc: 'Extract valuable insights from big data', status: 'Active', color: 'blue' },
                    { icon: '🛡️', title: 'Security Audits', desc: 'AI-driven security assessment tools', status: 'Beta', color: 'red' }
                ].map((tool, index) => (
                    <div key={index} className="group relative">
                        <div className={`absolute -inset-1 bg-gradient-to-r from-${tool.color}-400 to-${tool.color}-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
                        <div className="relative glass-morphism-dark p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-5xl float-animation">{tool.icon}</div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                    tool.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-400/50' :
                                    tool.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-400/50' :
                                    'bg-gray-500/20 text-gray-400 border-gray-400/50'
                                }`}>
                                    {tool.status}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">{tool.desc}</p>
                            <button className="btn-ghost w-full">
                                Explore Tool
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const AboutPage = () => (
    <div className="py-16 relative">
        <div className="text-center mb-20">        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
            About AI Nexus
        </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
                Pioneering the intersection of Artificial Intelligence and Blockchain Technology
            </p>
        </div>

        <div className="max-w-6xl mx-auto">
            <div className="glass-morphism-dark rounded-3xl p-12 border border-cyan-400/30 glow-border">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                            We're building the future where AI and blockchain converge to create unprecedented possibilities. 
                            Our platform empowers developers, creators, and innovators with cutting-edge tools that harness 
                            the power of decentralized intelligence.
                        </p>
                        <div className="space-y-6">
                            {[
                                { icon: '🎯', text: 'Innovation First', color: 'cyan' },
                                { icon: '🌐', text: 'Global Accessibility', color: 'purple' },
                                { icon: '🔒', text: 'Security Focused', color: 'pink' },
                                { icon: '⚡', text: 'Performance Optimized', color: 'green' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 group">
                                    <span className="text-2xl float-animation">{item.icon}</span>
                                    <span className={`text-${item.color}-400 font-semibold text-lg`}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="w-80 h-80 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full animate-pulse hologram-effect"></div>
                            <div className="absolute inset-4 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-full animate-pulse delay-1000"></div>
                            <div className="absolute inset-8 bg-gradient-to-r from-pink-500/5 to-cyan-400/5 rounded-full animate-pulse delay-2000"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl float-animation">🤖</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ContactPage = () => (
    <div className="py-16">
        <div className="text-center mb-20">        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
            Connect With Us
        </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
                Ready to join the AI revolution? Let's build the future together.
            </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="glass-morphism-dark rounded-2xl p-8 border border-cyan-400/30">
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
                <div className="space-y-6">
                    {[
                        { icon: '📧', label: 'Email', value: 'hello@ainexus.tech', color: 'cyan' },
                        { icon: '💬', label: 'Discord', value: 'AI Nexus Community', color: 'purple' },
                        { icon: '🐦', label: 'Twitter', value: '@AINexusOfficial', color: 'blue' },
                        { icon: '📱', label: 'Telegram', value: 't.me/ainexus', color: 'green' }
                    ].map((contact, index) => (
                        <div key={index} className="flex items-center space-x-4 p-6 rounded-xl glass-morphism hover:glass-morphism-dark transition-all duration-300 group">
                            <span className="text-3xl float-animation">{contact.icon}</span>
                            <div>
                                <div className={`text-${contact.color}-400 font-bold text-lg`}>{contact.label}</div>
                                <div className="text-gray-300 text-lg">{contact.value}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-morphism-dark rounded-2xl p-8 border border-purple-400/30">
                <h2 className="text-3xl font-bold text-white mb-8">Send Message</h2>
                <form className="space-y-6">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full glass-morphism border border-cyan-400/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-lg"
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full glass-morphism border border-cyan-400/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-lg"
                    />
                    <textarea 
                        rows="6" 
                        placeholder="Your Message" 
                        className="w-full glass-morphism border border-cyan-400/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-lg resize-none"
                    ></textarea>
                    <button className="btn-primary w-full flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <span>🚀</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
);

const Home = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-black text-white">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route index element={<HomePage />} />
                        <Route path="tools" element={<ToolsPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="contact" element={<ContactPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default Home;