import React, { useState } from "react";

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isAdmin, setIsAdmin] = useState("");

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
        throw new Error(error.json);
      }

      console.log(json);
      props.updateToken(json.Token);
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={(i) => {
          i.preventDefault();
          handleSignup();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          borderStyle: "solid",
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
        <button type="submit" className="btn-outline btn-success btn btn-wide">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Auth;
