import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  fetch("https://student-auth.vercel.app/register", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}

  const change = (e) => {
    setName(e.target.value);
  };
  const change1 = (e) => {
    setEmail(e.target.value);
  };
  const change2 = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="back">
    <div className="log">
      <div className="log1">
        <h2 style={{ color: "white" }}>Signup</h2>
        <input
          className="input1"
          type="text"
          onChange={change}
          placeholder="user name"
        />
        <input
          className="input1"
          type="email"
          onChange={change1}
          placeholder="user email"
        />
        <input
          className="input1"
          type="password"
          onChange={change2}
          placeholder="password"
        />
        
        <button className="btn" onClick={handleSubmit}>
          
          Signup
        </button>
        <p className="p1">or</p>
        <h5 className="twit">signup?<a href="#"> linkedin</a> </h5>
      </div>
    </div>
    </div>
  );
};

export default Signup;
