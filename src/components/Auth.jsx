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
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Username</label>
        <input value={username} onChange={(i) => setUsername(i.target.value)} />
        <label>Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Auth;
