import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import LinkedIn from "@material-ui/icons/LinkedIn"
import GitHub from "@material-ui/icons/GitHub"

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "#fff3dc",
      "&:hover": {
        fill: "#962d36",
        fontSize: "1.8rem",
      },
    },
  },
})

const Footer = () => {
  const classes = useStyles()

  const [state, setState] = useState({
    isLinkedInClicked: false,
    isGitHubClicked: false,
  })

  const urlClicked = (action, value) => () => {
    setState({ ...state, [action]: value })
  }

  if (state.isGitHubClicked === true || state.isLinkedInClicked === true) {
    const linkedInUrl = "https://www.linkedin.com/in/ioannispetsis"
    const gitHubUrl = "https://github.com/JPetsis"

    window.open(
      state && state.isGitHubClicked ? gitHubUrl : state.isLinkedInClicked ? linkedInUrl : "/"
    )
  }

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        onClick={urlClicked("isLinkedInClicked", true)}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
        className={classes.root}
      />
      <BottomNavigationAction
        onClick={urlClicked("isGitHubClicked", true)}
        style={{ padding: 0 }}
        icon={<GitHub />}
        className={classes.root}
      />
    </BottomNavigation>
  )
}

export default Footer
