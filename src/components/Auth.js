import React from "react";

import "./Auth.css";
import {authAction} from "../store/auth"
import { useDispatch } from "react-redux";

const Auth = () => {
    const dispatch = useDispatch()
  const submitter =e=>{
    e.preventDefault()
    dispatch(  authAction.isLoggedIn())

  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={submitter}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
