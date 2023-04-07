import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);

      // set email in localStorage
      localStorage.setItem("email", email);

      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Error creating user");
    }
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
        setValue(user.email);
        localStorage.setItem("email", user.email);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        setError("Error signing in with Google");
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          'url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")',
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Card style={{ backgroundColor: "black" }}>
        <Container className="my-5">
          <h1 style={{ color: "white", textAlign: "center" }}>
            Create your account
          </h1>
          <Form onSubmit={handleSignUpSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <Form.Text className="text-muted" style={{ color: "white" }}>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: "white" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label style={{ color: "white" }}>
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {error && (
                <Form.Text className="text-muted" style={{ color: "red" }}>
                  {error}
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="danger" type="submit" block>
              Sign Up
            </Button>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              or sign up with
            </div>
            <Button
              variant="outline-light"
              type="button"
              block
              onClick={handleSignInWithGoogle}
            >
              <FaGoogle style={{ marginRight: "10px" }} />
              Sign up with Google
            </Button>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              Already have an account? <a href="/login">Log in</a>
            </div>
          </Form>
        </Container>
      </Card>
    </div>
  );
}

export default Signup;
