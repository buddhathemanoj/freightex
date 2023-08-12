import React, { useState } from "react";
import { Form, Input, Button, message,Row,Col } from 'antd';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      message.success("Sign-in successful!");
      setTimeout(() => {
        navigate('/home');
      }, 1000); // Redirect after 1 second
    } catch (error) {
      message.error("Sign-in failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-container">
        <Row justify="center">
        <Col xl={8}>
      <Form form={form} onFinish={signIn}>
        <h1>Sign In</h1>
        <Form.Item
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter your email' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="Enter your password" />
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
  );
};
