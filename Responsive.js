
import React,{ useState }  from 'react'
import './Responsive.css';
function Responsive() {

    const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
  return (
    <div className="container-fluid">
                    <br></br><br></br>
                    
          <div className="card-1">
            <div className="row justify-content-center">

                <div className="col-md-8">
            <div className="card-body mt-5">
              <form>
            <div className="form-group">
                <label>Name</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Name
                 " style={{height:'3rem'}}
                
                />
              </div><br></br>
             
              <div className="form-group">
               <label>Salary</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Enter Salary 
                 " style={{height:'3rem'}}
                
                />
              </div><br></br>
              
            
              
              
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="Date"
                className="form-control  "
                
                placeholder="Date
                 " style={{height:'3rem'}}
                 value={currentDate}
                 onChange={(e) => setCurrentDate(e.target.value)}
                />
              </div>
              <br>
              </br>
              
              <div className="form-group">
                <label>Time</label>
                <input 
                  type="Time"
                className="form-control  "
                value={currentTime}
                onChange={(e) => setCurrentTime(e.target.value)} 
                placeholder="Time
                 " style={{height:'3rem'}}
                
                />
              </div>
              <br></br>
              <div className="form-group">
                <label>Month</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Month
                 " style={{height:'3rem'}}
                
                />
              </div><br></br>
              <div className="form-group">
                <label>Option</label>
                <input 
                  type="text"
                className="form-control  "
                placeholder="Time
                 " style={{height:'3rem'}}
                
                />
              </div>
              
              
              <br></br>
              <button id="btn1" className="btn btn-primary" >
            UPDATE
          </button>
          <button id="btn2" className="btn btn-primary" >
            DELETE
          </button>
          <button id="btn3" className="btn btn-primary" >
            View
          </button>

              </form>
            </div>
            </div>
            </div>
            </div>
            </div>
      
  )
}

export default Responsive;