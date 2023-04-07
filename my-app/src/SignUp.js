import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created:', user); 
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error);
      setError("Error creating user");
    }
  };

  const SignInButton = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log('User signed in:', user);
      navigate('/');
    }).catch((error) => {
      console.error('Error signing in:', error);
      setError("Error signing in with Google");
    });
  }

  return (
    <div
      style={{
        backgroundImage: 'url("https://www.example.com/background.jpg")',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Card style={{ backgroundColor: 'black' }}>
        <Container className="my-5">
          <h1 style={{ color: 'white', textAlign: 'center' }}>Create your account</h1>
          <Form onSubmit={handleSignUpSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
              <Form.Control onChange={(evt) => {
                setEmail(evt.target.value)
              }} type="email" name="email" placeholder="Enter email" required />
              <Form.Text className="text-muted" style={{ color: 'white' }}>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: 'white' }}>Password</Form.Label>
              <Form.Control
                onChange={(evt) => {
                  setPassword(evt.target.value)
                }} type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label style={{ color: 'white' }}>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" required />
            </Form.Group>

            <Button variant="danger" style={{ marginTop: '10px' }} type="submit" className="d-block mx-auto">
              Sign Up
            </Button>

            <Button variant="danger" className="mx-auto mt-3 d-flex align-items-center" onClick={SignInButton}>
              <FaGoogle size={24} className="mr-2" />
              Sign Up with Google
            </Button>
          </Form>
          {error && <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
        </Container>
      </Card>
    </div>
  );
}

export default Signup;
