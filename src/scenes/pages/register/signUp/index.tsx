import { Container, Typography, styled } from "@mui/material";
import { useState } from "react";
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
export const Sign_Up = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    var email = e.target.value;
  };

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      fullName: fullName,
      email: email,
      password: password,
    };
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateEmail(e);
    setEmail(e.target.value);
  };
  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleChangeName}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChangeEmail}
              required
            />
            <span className="emaillError">{emailError}</span>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePass}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              
            >
              Register
            </button>
          </div>
          <div className="text-right mb-5">
            Already have an account
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
