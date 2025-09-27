import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// This component will provide the animated background for the entire page.
const UrhacksLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particleOptions: ISourceOptions = {
        background: {
            color: {
                value: '#111827',
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: ['#fdb927', '#00643f', '#ffffff'],
            },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <div className="relative overflow-hidden">
                {/* Particle Background Layer (z-0) */}
                <Particles
                    id="tsparticles"
                    options={particleOptions}
                    className="absolute inset-0 z-0"
                />

                {/* Content Layer (z-10) */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        );
    }

    return <div className="relative bg-[#111827]">{children}</div>;
};

export default UrhacksLayout;