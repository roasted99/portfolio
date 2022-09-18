import Particles from "react-particles";

const Background = () => {
  return (
    <Particles 
    id="particles"
    options={{
      fpsLimit: 60,
      particles: {
        number: {
          value: 600,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: { value: "#ffffff"},
        line_linked: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.4,
          width: 1
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 600 },
          bounce: false,
          direction: "none",
          enable: true,
          out_mode: "out",
          random: true,
          speed: 0.3,
          straight: false
        },
        opacity: {
          anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
          random: {
            enable: true,
            minimumValue: 0.3
          },
          value: 0.6
        },
        shape: {
          type: "circle"
        },
        size: {
          anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
          randome: false,
          value: 1
        },
        retina_detect: true
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4
          }
        }
      },
      background: {
        color: "#000000"
      }

    }}/>
     
  )
}

export default Background