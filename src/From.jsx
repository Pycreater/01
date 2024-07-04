import React, { useState } from "react";

const From = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  // const handleName = (e) => {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };

  // const handleEmail = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };

  // const handlePassword = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInput}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInput}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInput}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default From;
