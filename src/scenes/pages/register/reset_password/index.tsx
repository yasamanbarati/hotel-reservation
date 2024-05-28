import React, { useEffect, useState } from "react";
import { Container, Typography, styled } from "@mui/material";
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
export const RestPassword = () => {
    
    // state
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [password1, setpassword1] = useState('');

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [emailError, setEmailError] = useState('')

    //Email confirmation
    const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        var email = e.target.value
    }

    useEffect(() => {
    }, [])

    //sent and update Data
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setLoading(true);

        const user = {
            email: email,
            password: password,
            password1: password
        }
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        validateEmail(e);
        setEmail(e.target.value);
    }

    const clearPutOutput = () => { setEmail(''); };

  return (
    <Container maxWidth="lg" sx={{ marginTop: { xs: "110px", md: "150px" } }}>
      <MainDiv>
        <Typography component="h2" variant="h4" color="primary">
          Login
        </Typography>
        <form className="reset-password-form">
          <h4 className="mb-3 text-center">Reset Your password</h4>
          <div className="form-input">
            <label className="ps-1 mb-2">Email :</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChangeEmail}
              required
            />
            <span className="emaillError">{emailError}</span>
          </div>
          <div className="form-input">
            <label className="ps-1 mb-2">new password :</label>
            <input
              type="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              onChange={(e) => {
                setpassword1(e.target.value);
              }}
              placeholder="Re-enter your new password"
              value={password1}
              required
            />
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <button
              type="submit"
              className="btn"
            //   onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Update"}
            </button>
          </div>
          <div className="text-center mb-5">
            Already have password
            <Link to="/" className="login-link">
              {" "}
              Login here
            </Link>
          </div>
        </form>
      </MainDiv>
    </Container>
  );
};
