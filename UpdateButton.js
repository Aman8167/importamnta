import React, { useState } from 'react';
// import { useSum } from 'react-router-dom';


import './UpdateButton.css';
function UpdateButton  () {
 
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  // const Sum = useSum();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value);
  };

  const handleSaveClick = () => {
    const formData = {
      Name,
      Email,
      Phonenumber,
      
    };
    // Sum.push({
    //   pathname: '/view',
    //   state: { formData },
    // });
  };
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
                  value={Name}
                  onChange={handleNameChange}
                className="form-control  "
                placeholder="Enter Name
                 " style={{height:'3rem'}}
                
                />
              </div><br></br>
             
              <div className="form-group">
               <label>Email</label>
                <input 
                  type="text"
                 value={Email}
                  onChange={handleEmailChange}
                className="form-control  "
                placeholder="Enter Email 
                 " style={{height:'3rem'}}
                
                />
              </div><br></br>
              
            
              
              
              <div className="form-group">
                <label>Contact Number</label>
                <input 
                  type="number"
                className="form-control  "
               
                value={Phonenumber}
                onChange={handlePhonenumberChange}
                
                placeholder="Enter your contact number
                 " style={{height:'3rem'}}
                
                />
              </div>
              <br>
              </br>
              
              
              
              <br></br>
              <button id="btn1" className="btn btn-primary" onClick={handleSaveClick} >
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

export default UpdateButton