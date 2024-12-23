import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Sidebar";
import Navbar from "./Header";
function Signup()
{
    return(

<div className="d-flex">
<Sidebar />

<div className="flex-grow-1 p-4">
<Navbar />
<div className="container my-5 col-6 col-md-8 col-lg-6">
<div className="card mx-auto shadow p-4" style={{ maxWidth: "400px" }}>

  <h2 className="text-center fw-bold">Create an Account</h2>
  <p className="text-center text-muted mb-5 ">
      Create a account to continue
        </p>
  
  <form>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address:</label>
      <input type="Full Name" className="form-control" id="Full Name" placeholder="esteban_schiller@gmail.com" />
    </div>
    <div className="mb-3">
      <label htmlFor="Username" className="form-label">Username</label>
      <input type="email" className="form-control" id="email" placeholder="Username" />

      <div className=" my-3">
        <label htmlFor="Password" className="from label">Password</label>
        <input type="Password" className="form-control" id="Password" placeholder="........." />
          
           <i className="bi bi-eye"></i>
        
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
      <p><input type="checkbox" id="rememberMe" />{" "}
        I accept terms and conditions</p>
      </div>
    
    </div>
    <button className="btn btn-primary w-100 mb-3">Sign Up</button>
    
  </form>
  <p className="text-center mt-4">
    Already have an account? {" "}
    <a href="/" className="text-decoration-none">Login</a>
  </p>
</div>
</div>


            </div>
</div>


);
}
export default Signup;