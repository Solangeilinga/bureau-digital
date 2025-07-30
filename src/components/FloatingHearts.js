import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
            <Heart
                key={i}
                className="absolute text-indigo-200 animate-bounce opacity-20"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                    fontSize: `${12 + Math.random() * 8}px`
                }}
            />
        ))}
    </div>
);

export default FloatingHearts;
