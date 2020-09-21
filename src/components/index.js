import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"
import Particles from "react-particles-js"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  particlesCanva: {
    position: "fixed",
    opacity: 0.25,
  },
})

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            color: {
              value: "#962d36",
            },
            links: {
              color: "#fff3dc",
            },
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#962d36",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: true,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 8,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
        }}
      />
    </>
  )
}

export default Home
