import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box } from "@material-ui/core"
import Navbar from "./Navbar"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#1f272d",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #fff3dc",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #fff3dc",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#ff4555 #ff4555 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#fff3dc",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #ff4555 #ff4555",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#962d36",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#ff4555",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff3dc",
    padding: "0",
    textTransform: "uppercase",
  },
}))

const Resume = () => {
  const classes = useStyles()
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Skills Acquiring
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Full Stack Web Development
            </Typography>
            <Typography variant="body1" align="center" style={{ color: "#ff4555" }}>
              CareerFoundry
            </Typography>
            <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
              6 Month intensive course specializing in TDD Ruby on Rails, HTML5, CSS3, AJAX, jQuery,
              JS, API and MySQL/ NoSQL
            </Typography>
          </Box>
          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Full Stack Python Development
            </Typography>
            <Typography variant="body1" align="center" style={{ color: "#ff4555" }}>
              Self learning
            </Typography>
            <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
              Learned Python and some of it's most famous libraries and frameworks included Flask
            </Typography>
          </Box>
          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Frontend Development
            </Typography>
            <Typography variant="body1" align="center" style={{ color: "#ff4555" }}>
              Self learning
            </Typography>
            <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
              Learned ReactJs - ReactRouter - Redux
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Resume
