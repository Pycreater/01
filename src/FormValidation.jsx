import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = `Name is Required`;
    }
    if (!email) {
      errors.email = `Email is Required`;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid Email...";
    }
    if (!password) {
      errors.password = `password id required..`;
    } else if (password.length < 6) {
      errors.password = `password must be 6 characters long.`;
    }
    if (!confirmPassword) {
      errors.confirmPassword = `password id required..`;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = `password do not match.`;
    }

    if (!age) {
      errors.age = `Age is required..`;
    } else if (isNaN(age) || age < 18) {
      errors.age = `Age must be a number at least 18`;
    }

    if (!gender) {
      errors.gender = `Gender is required`;
    }

    console.log(errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ValidationError = validateForm();

    if (Object.keys(ValidationError).length > 0) {
      setErrors(ValidationError);
    } else {
      console.log("Form Submitted");
    }
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password}
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age}
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name=""
            id=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
