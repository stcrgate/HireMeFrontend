import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    if (!user) {
      return (
          <>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                      <Link className="navbar-brand" to="/">
                          <h3 className="ms-5 fw-bold text-primary m-0">HireMe</h3>
                      </Link>
                      <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent"
                      >
                          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                              <li className="nav-item px-3">
                                  <Link className="nav-link" to="/view">
                                      <button className="btn fw-semibold">View Jobs</button>
                                  </Link>
                              </li>
                              <li className="nav-item px-1">
                                  <Link className="nav-link" to="/signup">
                                      <button className="btn btn-primary">Sign Up</button>
                                  </Link>
                              </li>
                              <li className="nav-item px-1">
                                  <Link className="nav-link" to="/login">
                                    <button className="btn btn-primary">Login</button>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </>
      );
    }
    else{
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <h3 className="fw-bold text-primary m-0">HireMe</h3>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/add">
                                    <h6 className="m-0">Add Job</h6>
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/view">
                                    <h6 className="m-0">View Jobs</h6>
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/admin">
                                    <h6 className="m-0">Admin</h6>
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <div class="dropdown">
                                    <button
                                        class="btn btn-primary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {user.name}
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <div class="dropdown-item d-flex">
                                                <button
                                                    className="btn btn-danger mx-auto"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/admin"></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );}
};

export default Navbar;
