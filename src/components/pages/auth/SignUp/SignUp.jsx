import React, { useState } from "react";
import "./SignUp.css";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
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
                id="password2"
                name="password2"
                value={form.password}
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
