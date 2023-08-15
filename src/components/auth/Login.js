import React, { useState } from "react";
import { Form, Input, Button, message,Row,Col,Checkbox } from 'antd';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useAuth ,firestore} from "../../firebase";
import { useNavigate } from "react-router-dom";
import './Login.css'
export const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const currentUser = useAuth();
  const [username, setUsername] = useState("");
  const signIn = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        message.warning("Please verify your email before signing in.");
      } else {
       
        // const userDocRef = firestore.doc(`users/${auth.currentUser.uid}`);
        // userDocRef.get().then((doc) => {
        //   if (doc.exists) {
        //     const userData = doc.data();
        //     // setUsername(userData.username);
        //     console.log(userData); // This should now print the correct username
        //   }
        // });
    
        message.success("Sign-in successful!");
        console.log('Current user:', currentUser ? currentUser.displayName || currentUser.email : 'No user logged in');
        setTimeout(() => {
          navigate('/home');
        }, 1000); // Redirect after 1 second
      }
    } catch (error) {
      message.error("Sign-in failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };
  return (
   

<div className="sign-in-container">
<h1 className="company">Go Freight</h1>
<div className="login-wrapper">
  
  <div className="logincontainer">
  <Row >
        <Col>
      
      <Form form={form} onFinish={signIn}>
        <h1 className="signinname" >Sign In</h1>
        <Form.Item
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter your email' }]}
        >
          <Input style={{height:'40px'}} placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password style={{height:'40px'}} placeholder="Enter your password" />
        </Form.Item>
        <div style={{ display: 'flex' }}>
  <Form.Item>
    <Button className="signinbutton" type="primary" htmlType="submit" loading={loading}>
      Sign In
    </Button>
  </Form.Item>
  <div style={{marginLeft:"20px"}} >
    <Form.Item style={{ marginBottom: 0 }}>
      <Checkbox />
      <span style={{ marginLeft: '8px' }}>Remember me</span>
    </Form.Item>
  </div>
  <div style={{marginTop:'3px', marginLeft:'40px'}}>
    <p>Forget Password?</p>
  </div>
</div>

      </Form>
      </Col>
      </Row>
      </div>
  </div>
</div>





  );
};
