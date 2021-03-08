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
import project1 from "../images/Ruby-on-Rails.jpg"
import project2 from "../images/Python-Flask.jpg"

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
    isProject1Clicked: false,
    isProject2Clicked: false,
  })

  const urlClicked = (action, value) => () => {
    setState({ ...state, [action]: value })
  }

  if (state.isProject1Clicked === true || state.isProject2Clicked === true) {
    const project1Url = "https://bikestuebingen.herokuapp.com/"
    const project2Url = "https://pyflask-myblog.herokuapp.com/auth/login?"

    window.open(
      state && state.isProject1Clicked ? project1Url : state.isProject2Clicked ? project2Url : "/"
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
                  E-commerce site in Rails
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a website I built using Ruby on Rails and various gems. It is work in
                  progress and is regularly updated.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={urlClicked("isProject1Clicked", true)}>
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 2" height="140" image={project2} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Twitter like blog in Python
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This was a webdev project using full stack Python and it covers most of the
                  elements of full stack web development process. Currently working with designer on
                  visual elements and UX.
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
      </Grid>
    </Box>
  )
}

export default Portfolio
