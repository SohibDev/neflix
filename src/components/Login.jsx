import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in");
    }
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Google:", user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
        setError("Error signing in with Google");
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")',
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
            Log in to your account
          </h1>
          <Form onSubmit={handleLoginSubmit}>
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

            <Button variant="danger" style={{ width: "100%" }} type="submit">
              Log In
            </Button>
          </Form>

          <div className="my-3 text-center" style={{ color: "white" }}>
            or
          </div>

          <Button
            variant="outline-light"
            style={{ width: "100%" }}
            onClick={handleSignInWithGoogle}
          >
            <FaGoogle style={{ marginRight: 10 }} />
            Log in with Google
          </Button>

          {error && (
            <div className="my-3 text-center" style={{ color: "red" }}>
              {error}
            </div>
          )}
        </Container>
      </Card>
    </div>
  );
}

export default Login;
