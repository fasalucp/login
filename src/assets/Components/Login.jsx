import React,{useState} from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  fetch("https://student-auth.vercel.app/login", {
    method: "POST",
    body: JSON.stringify({
      
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
        <h2 style={{color:"white"}}>Login</h2>
        <input className="input1"type="email"onChange={change1} placeholder="user email"  />
        <input className="input1" type="password"onChange={change2} placeholder="password" />
        <h5 className="cl">you are not a member?<Link className="link" to= "/signup">Signup</Link></h5>
        <button className="btn"onClick={handleSubmit}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default Login;
