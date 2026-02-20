import React, { useMemo, useRef, useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = useMemo(() => {
    return formData.email.trim() !== "" && formData.password.trim() !== "";
  }, [formData.email, formData.password]);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const nextValue = type === "checkbox" ? checked : value;

    setFormData((previousData) => ({
      ...previousData,
      [name]: nextValue,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
      form: "",
    }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      nextErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    return nextErrors;
  };

  const email = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email: formData.email.trim(),
      password: formData.password,
      rememberMe: formData.rememberMe,
    };

    console.log("Form data:", user);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      // Replace with your authentication API call.
      await new Promise((resolve) => {
        setTimeout(resolve, 700);
      });

      console.log("Login payload:", formData);
      setErrors({});
    } catch {
      setErrors({
        form: "Unable to sign in right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShowPassword = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <section className="login-page align-center">
      <div className="login-card">
        <h1 className="login-title">Login In</h1>
        <p className="align-center login-subtitle">
          Welcome back to VertexMart
        </p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`login-input ${errors.email ? "login-input--error" : ""}`}
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            ref={email}
            autoComplete="email"
          />
          {errors.email && <p className="login-error">{errors.email}</p>}

          <label htmlFor="password" className="login-label">
            Password
          </label>
          <div className="password-field">
            <input
              id="password"
              name="password"
              type="password"
              className={`login-input ${errors.password ? "login-input--error" : ""}`}
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              ref={passwordInput}
            />
            <button
              type="button"
              className="show-password-button"
              onClick={handleShowPassword}
            >
              Show
            </button>
          </div>
          {errors.password && <p className="login-error">{errors.password}</p>}

          <div className="login-row align-center">
            <label className="login-checkbox align-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>

            <a href="#" className="login-link">
              Forgot password?
            </a>
          </div>

          {errors.form && <p className="login-error">{errors.form}</p>}

          <button
            type="submit"
            className="login-button"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
