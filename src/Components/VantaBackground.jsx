import React, { useEffect, useRef, useState } from 'react';

const VantaBackground = ({ children }) => {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let mounted = true;

        const loadVanta = async () => {
            try {
                // Dynamic import to ensure proper loading
                const [THREE, TRUNK] = await Promise.all([
                    import('three'),
                    import('vanta/dist/vanta.trunk.min')
                ]);

                if (!mounted || !vantaRef.current || vantaEffect.current) return;

                vantaEffect.current = TRUNK.default({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x00d4ff,
                    backgroundColor: 0x0a0a0a,
                    spacing: 1.5,
                    chaos: 3.0
                });

                setIsLoaded(true);
            } catch (error) {
                console.warn('Vanta.js failed to load:', error);
                setIsLoaded(true); // Still show content even if Vanta fails
            }
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(loadVanta, 100);

        return () => {
            mounted = false;
            clearTimeout(timer);
            if (vantaEffect.current) {
                try {
                    vantaEffect.current.destroy();
                } catch (error) {
                    console.warn('Error destroying Vanta effect:', error);
                }
                vantaEffect.current = null;
            }
        };
    }, []);

    useEffect(() => {
        // Handle resize
        const handleResize = () => {
            if (vantaEffect.current && vantaEffect.current.resize) {
                try {
                    vantaEffect.current.resize();
                } catch (error) {
                    console.warn('Error resizing Vanta effect:', error);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative w-full min-h-screen">
            {/* Vanta container */}
            <div 
                ref={vantaRef} 
                className="absolute inset-0 w-full h-full"
                style={{ 
                    minHeight: '100vh',
                    background: isLoaded ? 'transparent' : '#0a0a0a'
                }}
            />
            
            {/* Fallback animated background if Vanta fails */}
            {!vantaEffect.current && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${2 + Math.random() * 3}s`
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
            
            {/* Content overlay */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default VantaBackground;
