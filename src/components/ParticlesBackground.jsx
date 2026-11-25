import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 70,
        },

        color: {
          value: ["#8b5cf6", "#2563eb"],
        },

        links: {
          enable: true,
          distance: 150,
          color: "#8b5cf6",
          opacity: 0.2,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          outModes: {
            default: "bounce",
          },
        },

        opacity: {
          value: 0.4,
        },

        size: {
          value: {
            min: 1,
            max: 4,
          },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },

        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.7,
            },
          },
        },
      },

      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
}