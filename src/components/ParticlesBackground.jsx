import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "#192841", // deep dark blue (premium)
          },
        },
        fpsLimit: 60,

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 1000,
            },
          },

          color: {
            value: "#38bdf8", // cyan-blue nodes
          },

          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.25,
            width: 1,
          },

          opacity: {
            value: 0.6,
          },

          size: {
            value: { min: 1, max: 3 },
          },

          move: {
            enable: true,
            speed: 0.6, // slow & smooth (important)
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // 👈 image jaisa effect
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.6,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
