import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Sidebar from "./Sidebar";
import Navbar from "./Header";
function Login()
{
  return(

<div className="d-flex">
<Sidebar />
{/* <Navbar /> */}
<div className="flex-grow-1 p-4">
<div className="col-lg-6 col-md-10 container my-5 ">
      <div className="card mx-auto shadow p-4" style={{ maxWidth: "500px" }}>
        <h2 className="text-center fw-bold">Login to Account</h2>
        <p className="text-center text-muted mb-4">
          Please enter your email and password to continue
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address:</label>
            <input type="email" className="form-control" id="email" placeholder="esteban_schiller@gmail.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your Password"
              />
              <span className="input-group-text">
                <i className="bi bi-eye"></i>
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" id="rememberMe" />{" "}
              <label htmlFor="rememberMe">Remember Password</label>
            </div>
            <a href="/" className="text-decoration-none">Forgot Password?</a>
          </div>
          <button className="btn btn-primary w-100 mb-3 mt-4">Sign In</button>
          
          <p className="text-center">Don't have an account? <Link to="/Signup">Create Account</Link></p>
        </form>
        
      </div>
    </div>
</div>
</div>

  );
}
export default Login;