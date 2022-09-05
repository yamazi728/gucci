import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Visibility from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";
import "./Auth.css";
import GoogleAuth from "./Authorization/Google/GoogleAuthForm";
// import "./LoginForm.css";

const SignUp = () => {
  const { signUp, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passCheck, setPassCheck] = useState("");

  function handleSave(e) {
    if (!email || !password) {
      alert("Заполните поля!");
      return;
    } else if (password !== passCheck) {
      alert("Пароли не совпадают!");
      return;
    }
    e.preventDefault(e);

    signUp(email, password, navigate);
  }
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [valuess, setValuess] = React.useState({
    amountt: "",
    passwordd: "",
    weightt: "",
    weightRangee: "",
    showPasswordd: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChanges = (prop) => (event) => {
    setValues({ ...valuess, [prop]: event.target.value });
  };

  const handleClickShowPasswords = () => {
    setValuess({
      ...valuess,
      showPasswordd: !valuess.showPasswordd,
    });
  };

  const handleMouseDownPasswords = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="back-img">
        <div className="backOpasity">
          <div className="container">
            <div className="container-img"></div>
            <div className="inputs-container">
              <div className="inputs-box">
                <Typography variant="h2">Hello!</Typography>
                <p style={{ marginBottom: "20px" }}>
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AlternateEmailIcon />
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "90%" }}
                    label="Email"
                    variant="outlined"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <KeyIcon />
                  <FormControl sx={{ width: "90%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        handleChange("password");
                        setPassword(e.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  {/* <AlternateEmailIcon />
                  <TextField
                    style={{ width: "90%" }}
                    label="Password"
                    variant="outlined" */}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <FormControl sx={{ width: "90%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-passwordd">
                      Confirm
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-passwordd"
                      type={valuess.showPasswordd ? "text" : "password"}
                      value={passCheck}
                      onChange={(e) => {
                        handleChanges("password");
                        setPassCheck(e.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswords}
                            onMouseDown={handleMouseDownPasswords}
                            edge="end"
                          >
                            {valuess.showPasswordd ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </div>
                {error ? (
                  <Alert style={{ marginTop: "10px" }} severity="error">
                    The email was entered incorrectly. Try again!
                  </Alert>
                ) : null}
                <Button
                  onClick={(e) => handleSave(e)}
                  variant="contained"
                  style={{ marginTop: "30px" }}
                >
                  Sign Up
                </Button>
                <GoogleAuth />
                <div>
                  <p>
                    If you already have an account,&nbsp;
                    <span
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/log-in`)}
                    >
                      log in
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
