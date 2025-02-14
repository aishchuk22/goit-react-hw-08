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
    <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl ml-auto mr-auto mt-8">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="card-body">

          <div className="form-control">
            <label className="label">
              <span className="label-text mb-2">Email:</span>
            </label>
            <Field className="input input-bordered" type="email" name="email" placeholder="johnsnow@mail.com" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text mb-2">Password:</span>
            </label>
            <Field className="input input-bordered" type="password" name="password" placeholder="Password" />
          </div>

          <div className="form-control mt-3 mr-auto ml-auto">
          <button className="btn btn-primary w-50" type="submit">Login</button>
          </div>

          <Link to="/register" className="link link-hover mr-auto ml-auto">
              Create new account!
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
