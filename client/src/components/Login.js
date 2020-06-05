import React, { useEffect } from "react";
import { login } from "../store/actions/userActions";
import { useForm, useValidateForm } from "../hooks";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const initLoginUser = {
    email: "",
    password: "",
  };
  // validation
  // callback
  const loginUserFromForm = () => {
    // console.log("here");
    login(dispatch, values).then((res) => {
      if (res) {
        history.push("/profile");
      }
    });
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    loginUserFromForm,
    initLoginUser,
    useValidateForm
  );
  useEffect(() => {
    // console.log(values);
  }, [values]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                value={values.email}
                onChange={handleChange}
                name="email"
                placeholder="Enter Email"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                value={values.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter Password"
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
