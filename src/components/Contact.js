import React, { useState } from "react"
import emailjs from "emailjs-com"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"
import { ContactInfo } from "./info.json"

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
  text: {
    textAlign: "left",
    color: "white",
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

const emptyEmail = {
  Name: "",
  Email: "",
  Message: "",
}

const Contacts = () => {
  const classes = useStyles()
  const [message, setMessage] = useState(null)
  const [email, setEmail] = useState(emptyEmail)
  const { userID, serviceID, templateID } = ContactInfo
  const handleChange = (e) => {
    e.persist()
    setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage(null)
    try {
      await emailjs.send(serviceID, templateID, email, userID)
      setMessage("Thank you!")
      setEmail(emptyEmail)
    } catch (err) {
      setMessage("error!")
    }
  }
  return (
    <Box component="div" style={{ background: "#1f272d", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box onSubmit={handleSubmit} component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{ color: "#ff4555", textAlign: "center", textTransform: "uppercase" }}
          >
            contact me
          </Typography>
          <InputField
            value={email.Name}
            name="Name"
            required={true}
            type="text"
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
            onChange={handleChange}
          />
          <InputField
            value={email.Email}
            name="Email"
            required={true}
            type="email"
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
            onChange={handleChange}
          />
          <InputField
            value={email.Message}
            name="Message"
            multiline={true}
            rows="10"
            required={true}
            type="text"
            fullWidth={true}
            label="Message"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: { color: "white" },
              maxLength: 160,
            }}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            className={classes.button}
          >
            Contact me
          </Button>
          {message === null ? null : (
            <Typography variant="caption" className={classes.text}>
              {message}
            </Typography>
          )}
        </Box>
      </Grid>
    </Box>
  )
}

export default Contacts
