import React, { useState } from 'react'
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import Home from './Home';
import { useEffect } from 'react';

const SignIn = () => {
    const [value, setValue] = useState('');
    const SignInButton = () => {
        signInWithPopup( auth, provider ).then(( data ) => {
            setValue( data.user.email );
            localStorage.setItem( 'email', data.user.email );
        })
    }

    useEffect(() => {
        setValue( localStorage.getItem( 'email' ));
    })

  return (
    <div>
        {value ? <Home /> :
        <button onClick={ SignInButton } > Sign in With Google </button> 
        }
    </div>
  )
}

export default SignIn




// import React, { useState, useEffect } from 'react';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { FaGoogle } from 'react-icons/fa';
// import { auth, provider } from './config';
// import { signInWithPopup } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const SignInButton = () => {
//     signInWithPopup(auth, provider).then((data) => {
//       setEmail(data.user.email);
//       localStorage.setItem('email', data.user.email);
//     })
//   }

//   useEffect(() => {
//     setEmail(localStorage.getItem('email'));
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       console.error('Passwords do not match');
//       return;
//     }
//     auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log('User created:', user);
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         navigate('/');
//       })
//       .catch((error) => {
//         console.error('Error creating user:', error);
//       });
//   }

//   return (
//     <div
//       style={{
//         backgroundImage: 'url("https://www.example.com/background.jpg")',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//       }}
//     >
//       <Card style={{ backgroundColor: 'black' }}>
//         <Container className="my-5">
//           <h1 style={{ color: 'white', textAlign: 'center' }}>Create your account</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
//               <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
//               <Form.Text className="text-muted" style={{ color: 'white' }}>
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label style={{ color: 'white' }}>Password</Form.Label>
//               <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </Form.Group>

//             <Form.Group controlId="formBasicPasswordConfirm">
//               <Form.Label style={{ color: 'white' }}>Confirm Password</Form.Label>
//               <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//             </Form.Group>

//             <Button variant="danger" style={{ marginTop: '10px' }} type="submit" className="d-block mx-auto">
//               Sign Up
//             </Button>

//             {email ? navigate('/') :
//               <Button variant="danger" className="mx-auto mt-3 d-flex align-items-center" onClick={SignInButton}>
//                 <FaGoogle size={24} className="mr-2" />
//                 Sign Up with Google
//               </Button>
//             }
//           </Form>
//         </Container>
//       </Card>
//     </div>
//   );
// }

// export default Signup;
