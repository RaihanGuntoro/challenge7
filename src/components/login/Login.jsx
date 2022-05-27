import React, { useRef, useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./Login.scss"; 
import axios from "axios"; 
import { Alert } from "bootstrap"; 
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"; 
 
export const LoginMenu = () => { 
  const navigate = useNavigate(); 
 
  const emailField = useRef(""); 
  const passwordField = useRef(""); 
 
  const [errorResponse, setErrorResponse] = useState({ 
    isError: false, 
    message: "", 
  }); 
 
  const onLogin = async (e) => { 
    e.preventDefault(); 
 
    try { 
      const userToLoginPayload = { 
        email: emailField.current.value, 
        password: passwordField.current.value, 
      }; 
 
      const loginRequest = await axios.post( 
        "http://localhost:3500/auth/login", 
        userToLoginPayload 
      ); 
 
      const loginResponse = loginRequest.data; 
 
      if (loginResponse.status) { 
        localStorage.setItem("token", loginResponse.data.token); 
        navigate("/cariMobil"); 
      } 
    } catch (err) { 
      console.log(err); 
      const response = err.response.data; 
 
      setErrorResponse({ 
        isError: true, 
        message: response.message, 
      }); 
    } 
  }; 
  const onLoginGoogleSuccess = async (credentialResponse) => { 
    console.log(credentialResponse); 
    try { 
      const userToLoginPayload = { 
        google_credential: credentialResponse.credential, 
      }; 
 
      const loginGoogleRequest = await axios.post( 
        "http://localhost:3500/auth/login-google", 
        userToLoginPayload 
      ); 
 
      const loginGoogleResponse = loginGoogleRequest.data; 
 
      if (loginGoogleResponse.status) { 
        localStorage.setItem("token", loginGoogleResponse.data.token); 
 
        navigate("/cariMobil"); 
      } 
    } catch (err) { 
      console.log(err); 
    } 
  }; 
  return ( 
    <div className="login"> 
      <form onSubmit={onLogin}> 
        <h3>LOG IN</h3> 
        <div className="mb-3"> 
          <label>Email address</label> 
          <input 
            ref={emailField} 
            type="email" 
            className="form-control" 
            placeholder="Enter email" 
          /> 
        </div> 
        <div className="mb-3"> 
          <label>Password</label> 
          <input 
            ref={passwordField} 
            type="password" 
            className="form-control" 
            placeholder="Enter password" 
          /> 
        </div> 
        <div className="mb-3"> 
          <div className="custom-control custom-checkbox"> 
            <input 
              type="checkbox" 
              className="custom-control-input" 
              id="customCheck1" 
            /> 
            <label className="custom-control-label" htmlFor="customCheck1"> 
              Remember me 
            </label> 
            {errorResponse.isError && ( 
              <Alert variant="danger">{errorResponse.message}</Alert> 
            )} 
          </div> 
        </div> 
        <div className="d-grid"> 
          <button type="submit" className="btn btn-primary"> 
            Submit 
          </button> 
        </div> 
        <p className="forgot-password text-right"> 
          Forgot <a href="#">password?</a> 
        </p> 
      </form> 
      <div className="my-3 text-center"> 
        <GoogleOAuthProvider clientId="744631181864-jmm2c7mvco93f6fl0co1lii4s1rv75fv.apps.googleusercontent.com"> 
          <GoogleLogin 
            onSuccess={onLoginGoogleSuccess} 
            onError={() => { 
              console.log("Login Failed"); 
            }} 
          /> 
        </GoogleOAuthProvider> 
      </div> 
    </div> 
  ); 
}; 
export default LoginMenu;