import { Container, Typography, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  "& form": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
}));
const Login = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  //Email confirmation
  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    var email = e.target.value;
  };

  useEffect(() => {}, []);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateEmail(e);
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    const user = {
      email: email,
      password: password,
    };

    // if( email.trim().length === 0 || password.trim().length === 0 ){
    //     alert('ایمیل و پسورد را وارد کنید')
    // }
    // else if (password.trim().length < 8 ){
    //     alert('پسورد را به درستی وارد کنید!!( پسورد 8 رقمی میباشد )')
    // }
    // else {
    //     const result = data.some((item) => item.email === email && item.password === password)

    //     if (result) {
    //         alert('خوش آمدید')
    //     } else {
    //         alert('لطفا اطلاعات را بررسی کنید')
    //     }
    // }
  };
  return (
    <Container maxWidth="lg" sx={{ marginTop: { xs: "110px", md: "150px" } }}>
      <MainDiv>
        <Typography component="h2" variant="h4" color="primary">
          Login
        </Typography>
        <form>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              value={email}
              onChange={handleChangeEmail}
              tabIndex={10}
              required
            />
            <span className="emaillError">{emailError}</span>
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <div>
            <Link to="/Register" className="forget-link">
              Forgot password?
            </Link>
          </div>
          <div>
            Don't have an account?
            <Link to="/Sign_Up" className="register-link">
              Sign Up
            </Link>
          </div>
        </form>
      </MainDiv>
    </Container>
  );
};

export default Login;
