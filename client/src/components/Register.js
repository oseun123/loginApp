import React, { useEffect } from "react";
import { register } from "../store/actions/userActions";
import { useForm, useValidateForm } from "../hooks";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const initRegisterUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  // validation
  // callback
  const registerUserFromForm = () => {
    // console.log("here");
    register(dispatch, values).then((res) => {
      history.push("/login");
    });
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    registerUserFromForm,
    initRegisterUser,
    useValidateForm
  );
  useEffect(() => {
    // console.log(values);
  }, [values]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="first_name"
                className={`form-control ${errors.first_name && "is-invalid"}`}
                value={values.first_name}
                onChange={handleChange}
                name="first_name"
                placeholder="Enter first name"
              />
              {errors.first_name && (
                <div className="invalid-feedback">{errors.first_name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="last_name"
                className={`form-control ${errors.last_name && "is-invalid"}`}
                value={values.last_name}
                onChange={handleChange}
                name="last_name"
                placeholder="Enter last name"
              />
              {errors.last_name && (
                <div className="invalid-feedback">{errors.last_name}</div>
              )}
            </div>
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
