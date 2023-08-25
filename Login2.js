import React from 'react'
import './Login2.css';
function Login2() {

   return(
        <div className="container-fluid">
                    <br></br><br></br>
                    
          <div className="card-1">
            <div className="row justify-content-center">
                <div className="col-md-10">
            <div className="card-body mt-5">
              <form>
            <div className="form-group">
                <label>Customer Name</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Company Name
                 " style={{height:'3rem'}}
                
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Email id
                 " style={{height:'3rem'}}
                
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Contact Number
                 " style={{height:'3rem'}}
                
                />
              </div>
              <div className="form-group">
                <label>Enter Address</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Address
                 " style={{height:'6rem'}}
                
                />
              </div>
              <div className="form-group">
                <label>Event type</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Event type
                 " style={{height:'3rem'}}
                
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Amount
                 " style={{height:'3rem'}}
                
                />
              </div>
              <div className="form-group">
                <label>Taxes/Charges</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Taxes Charges
                 " style={{height:'3rem'}}
                
                />
              </div>
              <div className="form-group">
                <label>Total Amount</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Total Amount
                 " style={{height:'3rem'}}
                
                />
              </div>
              <br></br>
              <button id="btn" className="btn btn-primary" >
            Print
          </button>
          <button id="btn1" className="btn btn-primary" >
            Discard
          </button>

              </form>
            </div>
            </div>
            </div>
            </div>
            </div>
      
  )
}

export default Login2