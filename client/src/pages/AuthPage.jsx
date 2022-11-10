import React, { useEffect, useState } from "react";
import { useMessage } from "../hooks/message.hook";
import { useDispatch } from "react-redux";
import { useLoginMutation } from '../store/app.api';
import { useRegistrationMutation } from "../store/app.api";
import { setCurrentToken } from "../store/tokenSlice";
import { setCurrentUser } from "../store/userSlice";

const AuthPage = () => {
  const dispatch = useDispatch()
  const message = useMessage()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [ 
    login, 
    {
      data: loginData, 
      error: loginError, 
      isLoading: loginLoading
    } 
  ] = useLoginMutation();
  const [ 
    register, 
    {
      data: registerData, 
      error: registerError, 
      isLoading: registerLoading
    } 
  ] = useRegistrationMutation()
  
  useEffect(() => {
    if (loginError) {
      message(loginError.data.message)
      const errors = loginError.data.errors
        ? loginError.data.errors
        : []
      errors.map((error) => message(error.msg))
    }
    if (registerError) {
      message(registerError.data.message)
      const errors = registerError.data.errors
        ? registerError.data.errors
        : []
      errors.map((error) => message(error.msg))
    }  
    if (loginData) {
      dispatch(setCurrentToken(loginData.token))
      dispatch(setCurrentUser(loginData.userId))
    }
    if (registerData) message(registerData.message)
  }, [loginData, registerData, loginError, registerError])

  const inputHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = () => {
    register({...form})
  }

  const loginHandler = () => {
    login({...form})
  }

  return (
    <div className="row">
      <div className="col s7 offset-s2">
        <h2 style={{textAlign: "center"}}>MY SHORT LINKS</h2>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">AUTHORISATION</span>
            
            <div className="input-field">
              <input 
                id="email"
                name="email"
                type="email"
                onChange={inputHandler}
                value={form.email}
              />
              <label className="inp_auth" htmlFor="email">Email</label>
            </div>

            <div className="input-field">
              <input
                name="password"
                id="password" 
                type="password"
                onChange={inputHandler}
                value={form.password}
                />
              <label className="inp_auth" htmlFor="password">Password</label>
            </div>
            
            <div className="card-action">
              <button
                className="btn btn_auth yellow darken-4"
                onClick={loginHandler}
                disabled={loginLoading}
              >
                Sign in
              </button>
              <button 
                className="btn btn_auth grey lighten-1 black-text"
                onClick={registerHandler}
                disabled={registerLoading}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
