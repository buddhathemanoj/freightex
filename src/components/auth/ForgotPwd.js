import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const styles = {
    body: {
      height: '100%',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    },
    logo: {
      margin: '0 auto',
      padding: '15px',
      textAlign: 'center',
    },
    logoImg: {
      width: '200px',
      height: 'auto',
    },
    loginPage: {
      backgroundColor: '#364150',
      textAlign: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'scroll',
    },
    loginContainer: {
      backgroundColor: '#eceef1',
      width: '353px',
      height: 'auto',
      margin: '0 auto',
      padding: '30px',
      paddingTop: '10px',
      position: 'relative',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#4db3a5',
      textAlign: 'center',
      fontSize: '28px',
      fontWeight: 400,
    },
    paragraph: {
      fontSize: '14px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    input: {
      width: '96%',
      backgroundColor: '#dde3ec',
      color: '#8290a3',
      height: '23px',
      padding: '8px',
      fontSize: '14px',
      border: '1px solid #dde3ec',
      borderRadius: '5px',
    },
    button: {
      backgroundColor: '#45B6AF',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      width: '24%',
      fontWeight: 600,
    },
    resetPwdButton: {
      width: '54%',
    },
    rememberForgot: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
    },
    forgotPassword: {
      marginLeft: '10px',
    },
    copyright: {
      marginTop: '20px',
      color: '#7a8ca5',
      textAlign: 'center',
    },
    copyrightLink: {
      color: '#5b9bd1',
      textShadow: 'none',
    },
    formActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.loginPage}>
      <div style={styles.logo}>
        <img src="/logo.png" alt="Logo" style={styles.logoImg} />
      </div>
      <br />
      <div style={styles.loginContainer}>
        <h2 style={styles.heading}>Forgot Your Password?</h2>
        <p style={styles.paragraph}>Enter your email address below, and we'll email instructions for setting a new one.</p>
        <div style={styles.inputGroup}>
          <input type="text" placeholder="Enter Your Email Address" style={styles.input} />
        </div>
        <div style={styles.formActions}>
          <button className='resetpwd' style={Object.assign({}, styles.button, styles.resetPwdButton)}>Reset My Password</button>
          <div style={styles.rememberForgot}>
            <span style={styles.forgotPassword}>
              <Link to="/login">Back to Login</Link>
            </span>
          </div>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>
          Copyright &copy; 2023{" "}
          <a href="https://www.digisailor.com" target="_blank" rel="noopener noreferrer" style={styles.copyrigthLink}>
            Digisailor
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
