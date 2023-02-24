import React, { useContext, useEffect, useCallback } from "react";
import NodesContext from "../contexts/NodesContext";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

import colors from "tailwindcss/colors";

interface IParticlesCanvas {
    className?: string
}

const ParticleCanvas = ({ className }: IParticlesCanvas) => {
    const { backgroundColor } = useContext(NodesContext);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            height="100vh"
            width="100vw"
            options={{
                background: {
                    color: {
                        value: backgroundColor ? backgroundColor : "#0f172a",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: colors.slate[400],
                    },
                    links: {
                        color: colors.slate[500],
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 0.5,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleCanvas;