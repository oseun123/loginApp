import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoggedin, message, status, spinner } = useSelector(
    (state) => state.user
  );
  useEffect(() => {}, [isLoggedin, message, status, spinner]);
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    dispatch({ type: "LOGOUT_USER" });
    history.push("/");
  };
  const loginRegLink = (
    <React.Fragment>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </React.Fragment>
  );
  const userLink = (
    <React.Fragment>
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          User
        </Link>
      </li>
      <li className="nav-item">
        <a href="#!" className="nav-link" onClick={logOut}>
          LogOut
        </a>
      </li>
    </React.Fragment>
  );
  const showMessage = (message, status) => {
    toast[status](message);
  };
  return (
    <React.Fragment>
      {message && status ? showMessage(message, status) : null}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div>
          <a className="navbar-brand" href="#!">
            ReactNodeApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {isLoggedin ? userLink : loginRegLink}
          </ul>
        </div>
      </nav>
      <ToastContainer />
      {spinner ? (
        <div className="clearfix">
          <div className="spinner-border float-right m-2" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Navbar;
