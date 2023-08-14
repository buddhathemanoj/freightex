

import React, { useState } from "react";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { Col, Row, Form, Input, Button ,message} from 'antd';
import { createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth"
import { auth ,firestore } from '../../firebase'; // Make sure you have the correct path to firestore
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const authInstance = getAuth();
 const navigate =useNavigate()


  const signUp =  async (values) => {
    setLoading(true);
    const { email, password, displayName } = values;
    try {
        const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);

        // Store the username in Firestore
        const userDocRef = doc(firestore, 'users', userCredential.user.uid);
        await setDoc(userDocRef, { displayName });
     
        await sendEmailVerification(userCredential.user);
        message.success("Sign-up successful! Please check your email for verification.");

      setTimeout(() => {
        // Check if the email is verified
        if (userCredential.user.emailVerified) {
          navigate('/login');
        } else {
          console.log("Email not verified yet.");
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-container" style={{justifyContent:'center',alignItems:'center',padding:'15% 0'}}>
        <div>
             <Row justify="center">
        <Col xl={6}>
          <Form form={form} onFinish={signUp}>
            <h1 style={{fontSize:'30px',textAlign:'center'}}>Create Account</h1>
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
            <Form.Item
              name="displayName"
              rules={[{ required: true, message: 'Please enter your username' }]}
            >
              <Input style={{height:'40px'}} placeholder="Enter your username" />
            </Form.Item>
            <div style={{display:'flex' ,gap:'30px'}}>
                 <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Sign Up
              </Button>
            </Form.Item>
            <Link to={'/login'}><p>Already a user?</p></Link>
            </div>
           
          </Form>
        </Col>
      </Row>
        </div>
     
    </div>
  );
};
