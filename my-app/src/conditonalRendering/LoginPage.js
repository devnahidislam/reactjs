import React, { useState } from 'react';

export default function LoginPage() {

  const [user, setUser] = useState({ username: "", password: "" });
  const {username, password} = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //...user ia spreed operator
  };
  const handleSubmit = (e) => {
    console.log('Log in Succesfully');
    console.log(user);
    e.preventDefault();
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form action="https://www.alaminxtk.com" onSubmit={handleSubmit}>
        <div className="formFild">
          <label htmlFor="username">User Name : </label>
          <input type="text" name="username" id="username" value={username} onChange={handleChange} required />
        </div>
        <div className="formFild">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" value={password} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
