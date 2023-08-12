// // import React, { useState } from "react";
// // import { getAuth } from 'firebase/auth';
// // import { Col,Row, Form, Input, Button } from 'antd';
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import auth from '../../firebase'
// // export const Signup = () => {
// //     const [form] = Form.useForm();
// //     const [loading, setLoading] = useState(false);
// //     const authInstance = getAuth();
// //     const signUp =  (values) => {
// //       setLoading(true);
// //       const { email, password } = values;
// //       createUserWithEmailAndPassword(authInstance, email, password)
// //       .then((userCredential) => {
// //         console.log(userCredential);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //     };
  
// //     return (
// //       <div className="sign-in-container">
// //         <Row justify="center">
// //           <Col    xl={8} >
// //         <Form form={form} onFinish={signUp}>
// //           <h1>Create Account</h1>
// //           <Form.Item
// //             name="email"
// //             rules={[{ required: true, type: 'email', message: 'Please enter your email' }]}
// //           >
// //             <Input placeholder="Enter your email" />
// //           </Form.Item>
// //           <Form.Item
// //             name="password"
// //             rules={[{ required: true, message: 'Please enter your password' }]}
// //           >
// //             <Input.Password placeholder="Enter your password" />
// //           </Form.Item>
// //           <Form.Item>
// //             <Button type="primary" htmlType="submit" loading={loading}>
// //               Sign Up
// //             </Button>
// //           </Form.Item>
// //         </Form>
// //         </Col>
// //         </Row>
// //        </div>
// //     );
// //   };

// import React, { useState } from "react";
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
// import { Col, Row, Form, Input, Button } from 'antd';
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { auth ,firestore } from '../../firebase'; // Make sure you have the correct path to firestore
// import { Link } from "react-router-dom";

// export const Signup = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const authInstance = getAuth();
 
//   const signUp =  async (values) => {
//     setLoading(true);
//     const { email, password, username } = values;
//     try {
//         const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);

//         // Store the username in Firestore
//         const userDocRef = doc(firestore, 'users', userCredential.user.uid);
//         await setDoc(userDocRef, { username });
    

//       console.log(userCredential);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="sign-in-container">
//       <Row justify="center">
//         <Col xl={8}>
//           <Form form={form} onFinish={signUp}>
//             <h1>Create Account</h1>
//             <Form.Item
//               name="email"
//               rules={[{ required: true, type: 'email', message: 'Please enter your email' }]}
//             >
//               <Input placeholder="Enter your email" />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               rules={[{ required: true, message: 'Please enter your password' }]}
//             >
//               <Input.Password placeholder="Enter your password" />
//             </Form.Item>
//             <Form.Item
//               name="username"
//               rules={[{ required: true, message: 'Please enter your username' }]}
//             >
//               <Input placeholder="Enter your username" />
//             </Form.Item>
//             <div style={{display:'flex' ,gap:'30px'}}>
//                  <Form.Item>
//               <Button type="primary" htmlType="submit" loading={loading}>
//                 Sign Up
//               </Button>
//             </Form.Item>
//             <Link to={'/login'}><p>Already a user?</p></Link>
//             </div>
           
//           </Form>
//         </Col>
//       </Row>
//     </div>
//   );
// };
// import React, { useState } from "react";
// import { getAuth } from 'firebase/auth';
// import { Col,Row, Form, Input, Button } from 'antd';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import auth from '../../firebase'
// export const Signup = () => {
//     const [form] = Form.useForm();
//     const [loading, setLoading] = useState(false);
//     const authInstance = getAuth();
//     const signUp =  (values) => {
//       setLoading(true);
//       const { email, password } = values;
//       createUserWithEmailAndPassword(authInstance, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     };
  
//     return (
//       <div className="sign-in-container">
//         <Row justify="center">
//           <Col    xl={8} >
//         <Form form={form} onFinish={signUp}>
//           <h1>Create Account</h1>
//           <Form.Item
//             name="email"
//             rules={[{ required: true, type: 'email', message: 'Please enter your email' }]}
//           >
//             <Input placeholder="Enter your email" />
//           </Form.Item>
//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: 'Please enter your password' }]}
//           >
//             <Input.Password placeholder="Enter your password" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" loading={loading}>
//               Sign Up
//             </Button>
//           </Form.Item>
//         </Form>
//         </Col>
//         </Row>
//        </div>
//     );
//   };

import React, { useState } from "react";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { Col, Row, Form, Input, Button ,message} from 'antd';
import { createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth"
import { auth ,firestore } from '../../firebase'; // Make sure you have the correct path to firestore
import { Link } from "react-router-dom";

export const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const authInstance = getAuth();
 
  const signUp =  async (values) => {
    setLoading(true);
    const { email, password, username } = values;
    try {
        const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);

        // Store the username in Firestore
        const userDocRef = doc(firestore, 'users', userCredential.user.uid);
        await setDoc(userDocRef, { username });
     
        await sendEmailVerification(userCredential.user);
        message.success("Sign-up successful! Please check your email for verification.");
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-container">
      <Row justify="center">
        <Col xl={8}>
          <Form form={form} onFinish={signUp}>
            <h1>Create Account</h1>
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
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please enter your username' }]}
            >
              <Input placeholder="Enter your username" />
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
  );
};
