import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

//terms and conditions modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b1fa2",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
    },
  },
});
export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [acceptTnc, setAcceptTnc] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mobile, setMobile] = React.useState(Number);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //create user through email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChange = (e) => {
    setAcceptTnc(e.target.checked);
    console.log(acceptTnc, e);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   // const firstName = event.target.value;
  //   const lastName = event.target.lastName.value;
  //   const mobile = event.target.mobile.value;

  //   createUserWithEmailAndPassword(email, password);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#7b1fa2" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      {...register("firstName", {
                        required: true,
                      })}
                      // onChange={(e) => setFirstName(e.target.value)}
                      // helperText={!firstName ? "Required" : ""}
                      // error={!firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      // error={!lastName}
                      // onChange={(e) => setLastName(e.target.value)}
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      {...register("lastName", {
                        required: true,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      // // helperText={!email ? "Required" : ""}
                      // error={!email}
                      // onChange={(e) => setEmail(e.target.value)}

                      required
                      fullWidth
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /[A-Za-z]{3}/,
                          message: "error message",
                        },
                      })}
                    />
                    <Typography
                      component="p"
                      color="error"
                      sx={{ marginTop: ".5rem" }}
                    >
                      {errors.email?.type === "required" && "Email is required"}
                      {errors.email?.type === "pattern" &&
                        "Email must be valid"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // error={!mobile}
                      // onChange={(e) => setMobile(e.target.value)}
                      fullWidth
                      id="mobile"
                      type="number"
                      label="Mobile number"
                      name="mobile"
                      autoComplete="off"
                      {...register("mobile", {
                        required: true,
                        minLength: {
                          value: 11,
                          message: "error message",
                        },
                      })}
                    />
                    <Typography
                      component="p"
                      color="error"
                      sx={{ marginTop: ".5rem" }}
                    >
                      {errors.mobile?.type === "required" &&
                        "Mobile Number is required"}
                      {errors.mobile?.type === "minLength" &&
                        "Mobile must be 11 characters"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="password"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      id="password"
                      autoComplete="new-password"
                      // error={!password}
                      // onChange={(e) => setPassword(e.target.value)}
                      {...register("password", {
                        required: true,
                        minLength: {
                          value: 8,
                          message: "error message",
                        },
                      })}
                    />

                    <Typography
                      component="p"
                      color="error"
                      sx={{ marginTop: ".5rem" }}
                    >
                      {errors.password?.type === "required" &&
                        "Password is required"}
                      {errors.password?.type === "minLength" &&
                        "Password must be 8 characters"}
                    </Typography>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="confirmPassword"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {" "}
                    <Grid container>
                      <Grid item xs={1}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={acceptTnc}
                              onChange={handleChange}
                              color="primary"
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs={11}>
                        <Box sx={{ margin: "7px" }}>
                          you agree to
                          <Button size="small" onClick={handleClickOpen}>
                            terms and privacy policy
                          </Button>
                        </Box>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Terms and Privacy Policy</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Tempora ut modi molestiae voluptates,
                              perferendis a quisquam velit, laudantium
                              accusantium repellat, architecto necessitatibus
                              pariatur aliquid dignissimos iure quae ab
                              consequuntur? Expedita!
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Agree</Button>
                          </DialogActions>
                        </Dialog>
                      </Grid>
                    </Grid>
                  </Grid>
                  {acceptTnc ? (
                    //  <input type="submit" />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      disabled
                    >
                      Sign Up
                    </Button>
                  )}
                </Grid>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      to="/login"
                      className="text-xs lg:text-lg  text-purple-800 font-bold"
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>

              {/* include validation with required or other standard HTML validation rules */}
            </form>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
