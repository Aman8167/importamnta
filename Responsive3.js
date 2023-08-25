import React,{ useState } from 'react';
import './Responsive3.css';
const Responsive3= () => {

  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const [EventName, setEventNameTitle] = useState('');
  const [Customername, setCustomername] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [Emailid, setEmailid] = useState('');
  const [Remainingpayment, setRemainingpayment] = useState('');
  const [Advancepayment,setAdvancepayment] = useState('');
  const [Paymentremaining,setPaymentremaining] = useState('');


  const handleAssign = async (e) => {
    e.preventDefault();

    const formData = { EventName,Customername,Phonenumber,Emailid,Remainingpayment,Advancepayment,Paymentremaining  };

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
          <form onAssign={handleAssign}>
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Event name (title)
             " style={{height:'3rem'}}
             value={EventName}
        onChange={(e) => setEventNameTitle(e.target.value)}
            />
          </div><br></br>
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Customer name " style={{height:'3rem'}}
            value={Customername}
            onChange={(e) => setCustomername(e.target.value)}
            />
          </div><br></br>

          <div className="form-group">
            
            <input 
              type="number"
            className="form-control  "
            placeholder="Phone number" style={{height:'3rem'}}
            value={Phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div><br></br>
          <div className="form-group ">
           
            <input type="Text" 
              className="form-control  "
              placeholder="Email id" style={{height:'3rem'}}
              value={Emailid}
            onChange={(e) => setEmailid(e.target.value)}
            />
          </div>
          <br></br>
          <div class="input-group mb-3">
  <input type="Date"  value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)} class="form-control" placeholder="date" ></input>
  
  <input type="time" value={currentTime}
        onChange={(e) => setCurrentTime(e.target.value)}  class="form-control" placeholder="time" aria-label=""></input>
</div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text " 
              className="form-control  " 
            
              placeholder="Remaining payment-"
               style={{width:'26%' }}
               value={Remainingpayment}
            onChange={(e) => setRemainingpayment(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Advanced Payment $-"
               style={{height:'3rem' }}
               value={Advancepayment}
               onChange={(e) => setAdvancepayment(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
           <input type="text " 
             className="form-control     "
             placeholder="Payment remaining-
              "
            
              style={{height:'3rem',}}
              value={Paymentremaining}
              onChange={(e) => setPaymentremaining(e.target.value)}
              
           />
           
          
         </div>
          
          <br></br>
          <div className="form-group ">
           
           <input type="text " 
             className="form-control     "
             placeholder="Total amount
              "
            
              style={{height:'3rem',}}
              value={Paymentremaining}
              onChange={(e) => setPaymentremaining(e.target.value)}
           />
           
          
         </div>
<br></br>
         <div className="form-control pt-3 pb-3">
         <select class="form-select" >
  <option selected>Status</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
         </div>
          
          <br></br>
          <button id="btn" className="btn btn-primary" >
            Cancel
          </button>
          <button id="btn1" className="btn btn-primary" >
            Assign to
          </button>
        
          </form>

        </div>
</div>
    </div>
      </div>
    </div>
    
  )
}

export default Responsive3;