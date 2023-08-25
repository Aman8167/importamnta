import React, {useState} from 'react';
import './Responsive4.css';
const Responsive4 = () => {

    const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [CompanyName,setCompanyName ] = useState('');
    const [Email,setEmail ] = useState('');
    const [ ContactNumber, setContactNumber ] = useState('');
    const [ EventType, setEventType ] = useState('');

    const handleSave = async (e) => {
      e.preventDefault();
  
      const formData = { firstName, lastName,CompanyName,Email,ContactNumber,EventType,  };
  
      try {
        const response = await fetch('http://localhost:3000/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Data submitted successfully!');
          // You can reset form fields here if needed
        } else {
          console.error('Failed to submit data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
 
  return (
    
        <div className="container-fluid">
               
      <div className="card-1">
        <div className="row justify-content-center">
            <div className="col-md-10">
        <div className="card-body mt-5">
          <form onSave={handleSave}>
          <div className="form-group ">
            
            <input 
              type="text"
            className="form-control  text-center "
            placeholder="Enter First Name 
             " style={{height:'3rem'}}
             value={firstName}
             onChange={(e)=>
              setFirstName(e.target.value)
            }
            />
          </div><br></br>
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control text-center "
            placeholder="Enter Last Name " style={{height:'3rem'}}
            value={lastName}
             onChange={(e)=>
              setLastName(e.target.value)
            }
            />
          </div><br></br>
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control text-center  "
            placeholder="Company Name
             " style={{height:'3rem'}}
             value={CompanyName}
             onChange={(e)=>
              setCompanyName(e.target.value)
            }
            />
          </div><br></br>

          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  text-center"
            placeholder="Enter Email" style={{height:'3rem'}}
            value={Email}
            onChange={(e)=>
             setEmail(e.target.value)
           }
            />
          </div><br></br>
          <div className="form-group ">
           
            <input type="number" 
              className="form-control text-center "
              placeholder="Enter Contact Number" style={{height:'3rem'}}
              value={ContactNumber}
              onChange={(e)=>
               setContactNumber(e.target.value)
             }
            />
          </div>
         
        
          <br></br>
          <div className="form-group  ">
         
            <input type="text " 
              className="form-control text-center " 
            
              placeholder="Enter Event Type"
               style={{height:'3rem' }}
               value={EventType}
               onChange={(e)=>
                setEventType(e.target.value)
              }
            />
          </div>
          <br></br>
          <div class="form-group">
  <input type="Date"  value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)} class="form-control" placeholder="date"style={{height:'3rem' }} ></input>
  
 
</div>
          <br></br>
          <div className="form-group ">
           
          <input type="time" value={currentTime}
        onChange={(e) => setCurrentTime(e.target.value)}  class="form-control" placeholder="time" style={{height:'3rem' }}></input>
           
          
         </div>
          
          
          
<br></br>
         <div className="form-control pt-3 pb-3 ">
         <select class="form-select">
  <option selected>Select Venue</option>
  <option value="Add Venue">Add Venue</option>
  <option value="Sub Venue">Sub Venue</option>
  <option value="No .of guest">No. of guest</option>
  <option value="Budget">Budget</option>
</select>
         </div>
          <br></br>
          <br></br>
          <button  id="btn" className="btn btn-primary" >
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

export default Responsive4;