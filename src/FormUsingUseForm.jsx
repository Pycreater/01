import React from "react";
import { useForm } from "react-hook-form";

const FormUsingUseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is Required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Email is Invalid." },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is Required.",
              minLength: {
                value: 6,
                message: "password must be 6 characters long",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "confirm password is required...",
              validate: (value) =>
                value === password || "Password do not match",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            {...register("age", {
              required: "Age is required.",
              validate: (value) => value >= 18 || "Age need's at least 18",
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id=""
            {...register("gender", {
              required: "Gender is Required.",
              validate: (value) =>
                ["male", "female"].includes(value) || "Invalid Gender Selected",
            })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormUsingUseForm;
