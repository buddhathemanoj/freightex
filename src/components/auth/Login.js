import React, { useState } from "react";
import { Form, Input, Button, message,Row,Col } from 'antd';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useAuth ,firestore} from "../../firebase";
import { useNavigate } from "react-router-dom";
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
        // Fetch the username from Firestore using the user's UID
        const userDocRef = firestore.doc(`users/${auth.currentUser.uid}`);
        userDocRef.get().then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            // setUsername(userData.username);
            console.log(userData); // This should now print the correct username
          }
        });
    
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
    <div className="sign-in-container"  style={{justifyContent:'center',alignItems:'center',padding:'15% 0'}}>
        <div  >
           
           
             <Row justify="center">
        <Col xl={6}>
      
      <Form form={form} onFinish={signIn}>
        <h1 style={{textAlign:'center'}}>Sign In</h1>
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
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
      </Col>
      </Row>
        </div>
       
    </div>
  );
};
