import React, { useState } from "react";
import "./SignIn.css";
import { useUserAuth } from "../../../../hooks/useAuth";
export const SignIn = () => {
  const [form, setForm] = useState({
    firstName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleUserAuth = useUserAuth(form);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
    handleUserAuth();
  };

  return (
    <div className="wrapper">
      <div className="register-container">
        <div className="register-form">
          <h1>Авторизироваться</h1>
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
            <button type="submit" className="register-button">
              Зарегистрироваться
            </button>
            <button type="submit" className="auth-button">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
