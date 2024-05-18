import React, { useState } from "react";
import "./SignUp.css";
import { useUserRegister } from "../../../../hooks/useUserRegister";
export const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    password: "",
    password1: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleUserRegister = useUserRegister(form);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
    handleUserRegister();
  };

  return (
    <div className="wrapper">
      <div className="register-container">
        <div className="register-form">
          <h1>Зарегистрироваться</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Имя</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Повторите пароль</label>
              <input
                type="password"
                id="password1"
                name="password1"
                value={form.password1}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="register-button">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
