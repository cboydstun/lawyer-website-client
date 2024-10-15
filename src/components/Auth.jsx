import React, { useEffect, useState } from "react";
import { Collapse } from "react-daisyui";
import "./Auth.css";
import AllClients from "./AllClients";
const Auth = (props) => {
  const { user, setUser, getAllClients, clients } = props;
  const [showTable, setShowTable] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const handleSignup = async () => {
    try {
      setErrorMsg("");
      const result = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: username,
          email: email,
          phoneNumber: phoneNumber,
          pass: password,
        }),
      });

      const json = await result.json();
      if (json.Error) {
        throw new Error(json.Error);
      }
      setUser(json.Created.username);
      console.log(json);
      console.log(user);
      props.updateToken(json.Token);
    } catch (err) {
      setErrorMsg(err.message);
    }
  };
  const handleLogin = async () => {
    const result = await fetch("http://localhost:8080/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pass: password,
      }),
    });
    const json = await result.json();
    console.log(json);
    setUser(json.User.username);
    setIsAdmin(json.User.isAdmin);
  };

  return (
    <div>
      <p>Hello</p>
      <p>Welcome to the Sign up Area</p>
      <div className="Auth-content">
        <div className="sign-in-container">
          <form
            onSubmit={(i) => {
              i.preventDefault();
              handleSignup();
            }}
          >
            <label className="label first-line:left-7">Username:</label>
            <input
              required
              type="username"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="label first-line:left-7">Email:</label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label first-line:left-7">Password:</label>
            <input
              required
              type="password"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label first-line:left-7">Phone Number:</label>
            <input
              type="phoneNumber"
              className="input input-bordered w-full max-w-xs"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              type="submit"
              className="btn-outline btn-success btn btn-wide mt-6"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="admin-login-container">
          <form
            onSubmit={(i) => {
              i.preventDefault();
              handleLogin();
            }}
          >
            <h1 className="ptag">Admin Login</h1>
            <label className="label first-line:left-7">Username:</label>
            <input
              required
              type="username"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="label first-line:left-7">Email:</label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label first-line:right-7">Password:</label>
            <input
              required
              type="password"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="btn-outline btn-success btn btn-wide mt-11"
            >
              Admin Login
            </button>
          </form>
        </div>
      </div>
      <div>
        <form>
          {isAdmin ? (
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                getAllClients();
                setShowTable(true);
              }}
            >
              All Clients
            </button>
          ) : null}

          <button
            className="btn btn-outline"
            style={{
              position: "relative",
              color: "red",
              height: "auto",
            }}
            onClick={() => clearToken()}
          >
            Logout
          </button>
        </form>
        {showTable ? <AllClients clients={clients} /> : null}
      </div>
    </div>
  );
};

export default Auth;
