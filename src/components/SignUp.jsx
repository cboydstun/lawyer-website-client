import React, { useState } from "react";
import Router from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Router.post("", {
        username,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Something went wrong!");
    }
  };

  return (
    <div>
      <p>Sign Up</p>
    </div>
  );
};

export default SignUp;
