// src/Pages/Login.js
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import { useNavigate } from "react-router-dom";

const formObj = {
  email: "",
  password: "",
};

const Login = () => {
  const [eye, setEye] = useState(false);

  // Context
  const { light, login, logout } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - Urban Cart";
  }, []);

  // Yup Validation Schema
  const formSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format!")
      .required("Email is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`]{8,}$/,
        "Must contain 8+ characters, 1 uppercase, 1 lowercase, 1 number & 1 special character!"
      ),
  });

  const formikForm = useFormik({
    initialValues: formObj,
    validationSchema: formSchema,
    onSubmit: (values) => {
      const fakeToken = "user123token";
      login(fakeToken);

      formikForm.resetForm();
      navigate("/products"); // redirect to protected page
    },
  });

  return (
    <main
      className={`pt-30 min-h-[100vh] flex items-center justify-center ${
        light ? "bg-neutral-900" : "bg-gray-100"
      } animation`}
    >
      <section className="container mx-auto px-5 lg:px-0 max-w-md">
        <form
          onSubmit={formikForm.handleSubmit}
          className={`${
            light ? "bg-slate-700" : "bg-white"
          } p-6 rounded-xl shadow-lg animation`}
        >
          <p
            className={`font-bold ${
              light ? "text-neutral-200" : "text-blue-500"
            } text-2xl text-center pb-5 animation`}
          >
            Login Form
          </p>

          <div className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className={`font-medium ${
                  light ? "text-neutral-200" : "text-blue-500"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full border rounded p-2 outline-0 animation ${
                  light
                    ? "border-neutral-200 text-neutral-200"
                    : "border-gray-400 text-black"
                }`}
                name="email"
                value={formikForm.values.email}
                onChange={formikForm.handleChange}
                onBlur={formikForm.handleBlur}
              />
              {formikForm.touched.email && formikForm.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formikForm.errors.email}
                </p>
              )}
            </div>

            {/* Password Field with Eye Toggle */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className={`font-medium ${
                  light ? "text-neutral-200" : "text-blue-500"
                }`}
              >
                Password
              </label>
              <div
                className={`flex items-center border rounded animation ${
                  light
                    ? "border-neutral-200 text-neutral-200"
                    : "border-gray-400 text-black"
                }`}
              >
                <input
                  type={eye ? "text" : "password"}
                  id="password"
                  className="flex-grow p-2 outline-0 bg-transparent"
                  name="password"
                  value={formikForm.values.password}
                  onChange={formikForm.handleChange}
                  onBlur={formikForm.handleBlur}
                />
                {!eye ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 ml-2 px-2 cursor-pointer"
                    onClick={() => setEye(true)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 ml-2 px-2 cursor-pointer"
                    onClick={() => setEye(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </div>
              {formikForm.touched.password && formikForm.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formikForm.errors.password}
                </p>
              )}

              {/* Logout Button */}
              <div className="flex items-center justify-end gap-2">
                <p
                  className={`text-sm cursor-pointer animation pt-2 ${
                    light
                      ? "text-neutral-300 hover:text-sky-500"
                      : "text-blue-500"
                  }`}
                  onClick={() => {
                    logout();
                    formikForm.resetForm();
                  }}
                >
                  Logout
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`${
                light
                  ? "bg-sky-600 text-white hover:bg-slate-500"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              } py-2 rounded animation cursor-pointer`}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
