import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "#ff4555",
    borderColor: "#ff4555",
  },
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ff4555",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField)

const Contacts = () => {
  const classes = useStyles()
  return (
    <Box component="div" style={{ background: "#1f272d", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{ color: "#ff4555", textAlign: "center", textTransform: "uppercase" }}
          >
            contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <InputField
            fullWidth={true}
            label="Company Name"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            className={classes.button}
          >
            Contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Contacts
