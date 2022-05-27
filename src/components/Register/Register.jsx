import axios from "axios"; 
import { Alert } from "bootstrap"; 
import React, { useRef, useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./Register.scss"; 
 
const Register = () => { 
  const navigate = useNavigate(); 
 
  const nameField = useRef(""); 
  const emailField = useRef(""); 
  const roleField = useRef(""); 
  const passwordField = useRef(""); 
 
  const [errorResponse, setErrorResponse] = useState({ 
    isError: false, 
    message: "", 
  }); 
 
  const onRegister = async (e) => { 
    e.preventDefault(); 
 
    try { 
      const userToRegisterPayload = { 
        username: nameField.current.value, 
        email: emailField.current.value, 
        role: roleField.current.value, 
        password: passwordField.current.value, 
      }; 
 
      const registerRequest = await axios.post( 
        "http://localhost:3500/auth/register", 
        userToRegisterPayload 
      ); 
 
      const registerResponse = registerRequest.data; 
 
      if (registerResponse.status) navigate("/login"); 
    } catch (err) { 
      console.log(err); 
      const response = err.response.data; 
 
      setErrorResponse({ 
        isError: true, 
        message: response.message, 
      }); 
    } 
  }; 
  return ( 
    <div className="register"> 
      <form onSubmit={onRegister}> 
        <h3>REGISTER</h3> 
        <div className="mb-3"> 
          <label>Name</label> 
          <input 
            ref={nameField} 
            type="text" 
            className="form-control" 
            placeholder="Name" 
          /> 
        </div> 
        <div className="mb-3"> 
          <label>Email</label> 
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
          <label>Role</label> 
          <select ref={roleField}> 
            <option>Pilih Role</option> 
            <option value="admin">Admin</option> 
            <option value="member">member</option> 
          </select> 
        </div> 
        <div className="d-grid"> 
          <button type="submit" className="btn btn-primary"> 
            Sign Up 
          </button> 
        </div> 
        <p className="forgot-password text-right"> 
          Already registered <a href="/login">sign in?</a> 
        </p> 
        {errorResponse.isError && ( 
          <Alert variant="danger">{errorResponse.message}</Alert> 
        )} 
      </form> 
    </div> 
  ); 
}; 
 
export default Register;