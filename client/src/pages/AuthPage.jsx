import React, { useEffect, useState } from "react";
import { useHTTP } from "../hooks/http.hooks";
import { useMessage } from "../hooks/message.hook";

const AuthPage = () => {
  const { loading, request, error, clearError } = useHTTP()
  const message = useMessage()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const inputHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch(err) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      message(data.message)
    } catch(err) {}
  }

  return (
    <div className="row">
      <div className="col s7 offset-s2">
        <h1>NICE LINKS</h1>
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
                disabled={loading}
              >
                Sign in
              </button>
              <button 
                className="btn btn_auth grey lighten-1 black-text"
                onClick={registerHandler}
                disabled={loading}
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
