import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="min-h-screen flex flex-col mt-20 items-center">
          <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend">Login</legend>
            <label className="fieldset-label flex flex-col items-start">
              <span>Email:</span>
              <Field
                className="input"
                name="email"
                type="email"
                placeholder="Email"
              />
            </label>
            <label className="fieldset-label flex flex-col items-start">
              <span>Password:</span>
              <Field
                className="input"
                name="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <button className="btn btn-neutral mt-4" type="submit">
              Login
            </button>
            <Link to="/register" className="link link-hover">
              Create new account
            </Link>
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;