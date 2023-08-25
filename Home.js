import React from 'react'
import './Home.css';
function home() {

  
  return (
    <div className="container-fluid">
                    <br></br><br></br>
                    
          <div className="card-1">
            <div className="row justify-content-center">
                <div className="col-md-10">
            <div className="card-body mt-5">
              <form>
            <div className="form-group">
                
                <input 
                  type="text"
                className="form-control text-center "
                placeholder="Enter First Name
                 " style={{height:'3rem'}}
                
                />
              </div><br></br>
              <div className="form-group">
                
                <input 
                  type="text"
                className="form-control text-center "
                placeholder="Enter Last Name
                 " style={{height:'3rem'}}
                
                />
              </div><br></br>
              <div className="form-group">
               
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Salary Amount
                 " style={{height:'3rem'}}
                
                />
              </div><br></br>
              
            
              
              <div class="input-group mb-3">
  <input type="Date"   class="form-control" placeholder="date" ></input>
  
  <input type="time"   class="form-control" placeholder="time" aria-label=""></input>
</div>
              
              <div className="form-group">
                
                <input 
                  type="text"
                className="form-control  "
                placeholder="Month
                 " style={{height:'3rem'}}
                
                />
              </div>
              
              
              <br></br>
              <button id="btn" className="btn btn-primary" >
            Save
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

export default home