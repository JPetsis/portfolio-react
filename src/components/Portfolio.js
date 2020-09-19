import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core"
import Navbar from "./Navbar"
import project1 from "../images/react-redux.jpg"
import project2 from "../images/Ruby-on-Rails.jpg"
import project3 from "../images/Python-Flask.jpg"

const useStyles = makeStyles({
  mainContainer: {
    background: "#1f272d",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
})

const Portfolio = () => {
  const classes = useStyles()

  const [state, setState] = useState({
    isProject2Clicked: false,
    isProject3Clicked: false,
  })

  const urlClicked = (action, value) => () => {
    setState({ ...state, [action]: value })
  }

  if (state.isProject2Clicked === true || state.isProject3Clicked === true) {
    const project2Url = "https://bikestuebingen.herokuapp.com/"
    const project3Url = "https://pyflask-myblog.herokuapp.com/auth/login?"

    window.open(
      state && state.isProject2Clicked ? project2Url : state.isProject3Clicked ? project3Url : "/"
    )
  }

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 1" height="140" image={project1} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  This Portfolio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This Portfolio was a project in order to learn React/Redux. I started with zero
                  knowledge about React and the project became so beautiful that i replaced my
                  already existed Portfolio page with this.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 2" height="140" image={project2} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  E-commerce site in Rails
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This was my very first project i ever build. It was part of my bootcamp and made
                  me think like a developer. I used Ruby on Rails and various gems. Is no by any
                  means 100% done yet and that is because every time there will be place for
                  improvisation.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={urlClicked("isProject2Clicked", true)}>
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 3" height="140" image={project3} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Twitter like blog in Python
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This was my project to learn full stack Python as it covers most of the important
                  things you have to learn. It made fall in love with Python for it's simplicity. I
                  need only to improve the visuals.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={urlClicked("isProject3Clicked", true)}>
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
