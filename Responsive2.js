import React,{ useState }  from 'react'
import './Responsive2.css';
const Responsive2= () => {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

  const [Depositername, setDepositername] = useState('');
  const [ClientnameAutomaticallycome, setClientnameAutomaticallycome] = useState('');
  const [Amount, setAmount] = useState('');
  const [AdvancePayment, setAdvancePayment] = useState('');
  const [Remainingpayment, setRemainingpayment] = useState('');
  const [Eventname,setEventname] = useState('');
  const [Paymentdetails,setPaymentdetails] = useState('');
  const [COMPLETECHART,setCOMPLETECHART] = useState('');


  const handleAdd = async (e) => {
    e.preventDefault();

    const formData = { Depositername,ClientnameAutomaticallycome,Amount,AdvancePayment,Remainingpayment,Eventname,Paymentdetails,COMPLETECHART  };

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
          <form onAdd={handleAdd}>
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Depositer name- " style={{height:'3rem'}}
            value={Depositername}
        onChange={(e) => setDepositername(e.target.value)}
            />
          </div><br></br>
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Client name Automatically come- " style={{height:'3rem'}}
            value={ClientnameAutomaticallycome}
            onChange={(e) => setClientnameAutomaticallycome(e.target.value)}
            />
          </div><br></br>

          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Amount-" style={{height:'3rem'}}
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            />
          </div><br></br>
          <div className="form-group ">
           
            <input type="Date" 
              className="form-control  "
              placeholder="First select date" style={{height:'3rem'}}
              value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
            <input type="text" 
              className="form-control     "
              placeholder="Advance Payment-
               "
               style={{height:'3rem',}}
               value={AdvancePayment}
            onChange={(e) => setAdvancePayment(e.target.value)}
               
            />
            
           
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Remaining payment-"
               style={{height:'3rem' }}
               value={Remainingpayment}
            onChange={(e) => setRemainingpayment(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Event name-"
               style={{height:'3rem' }}
               value={Eventname}
            onChange={(e) => setEventname(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
           <input type="text " 
             className="form-control     "
             placeholder="Payment details-
              "
            
              style={{height:'6rem',}}
              value={Paymentdetails}
              onChange={(e) => setPaymentdetails(e.target.value)}
           />
           
          
         </div>
          
          <br></br>
          <div className="form-group ">
           
           <input type="text " 
             className="form-control     "
             placeholder="COMPLETE CHART-
              "
            
              style={{height:'6rem',}}
              value={COMPLETECHART}
              onChange={(e) => setCOMPLETECHART(e.target.value)}
              
           />
           
          
         </div>
          
          <br></br>
          <button id="btn1" className="btn btn-primary" >
            Add
          </button>
        
          </form>

        </div>
</div>
    </div>
      </div>
    </div>
    
  )
}

export default Responsive2;