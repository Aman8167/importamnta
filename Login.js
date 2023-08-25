import React, { useState }from 'react'
import './Login.css';
function Login() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Phone Number:', formData.phoneNumber);
    
  };

  return (
    <div className="container-fluid">
      <br></br><br></br><br></br><br></br>
      <div className="row justify-content-center">
      
        <div className="col-md-6">
        <h4 class="text-center">Log in</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Enter Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <button id="btn" type="submit" className="btn btn-success btn-lg w-75 ">
              Continue
            </button>
            <div class="form-group text-center">
              By signining up, you agree to GoGoRide's Terms of<br></br>
              <a src=""href="#">Service and Privacy Policy</a>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login