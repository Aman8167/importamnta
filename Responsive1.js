import React,{ useState } from 'react'
import './Responsive1.css';
const Responsive1 = () => {

  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

  const [Title, setTitle] = useState('');
  const [Eventname, setEventname] = useState('');
  const [NumberofGuests, setNumberofGuests] = useState('');
  const [EventVenue, setEventVenue] = useState('');
  const [AssigntoManagerorExecutive, setAssigntoManagerorExecutive] = useState('');
  const [Eventmanagementrequirement,setEventmanagementrequirement] = useState('');
  


  const handleSend = async (e) => {
    e.preventDefault();

    const formData = { Title,Eventname,NumberofGuests,EventVenue,AssigntoManagerorExecutive,Eventmanagementrequirement,  };

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
                <br></br><br></br>
                
      <div className="card-1">
        <div className="row justify-content-center">
            <div className="col-md-10">
        <div className="card-body mt-5">
          <form onSend={handleSend}>
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Title " style={{height:'4rem'}}
            value={Title}
        onChange={(e) => setTitle(e.target.value)}
            />
          </div><br></br>

          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Event name-" style={{height:'4rem'}}
            value={Eventname}
        onChange={(e) => setEventname(e.target.value)}
            />
          </div><br></br>
          <div className="form-group ">
           
            <input type="Date" 
              className="form-control  "
              placeholder="Event date" style={{height:'4rem'}}
              value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
            <input type="text" 
              className="form-control     "
              placeholder="Number of Guests
               "
             
               style={{height:'4rem',}}
               value={NumberofGuests}
               onChange={(e) => setNumberofGuests(e.target.value)}
               
            />
            
           
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Event Venue "
               style={{height:'4rem' }}
               value={EventVenue}
               onChange={(e) => setEventVenue(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Assign to Manager or Executive "
               style={{height:'4rem' }}
               value={AssigntoManagerorExecutive}
               onChange={(e) => setAssigntoManagerorExecutive(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
           <input type="text " 
             className="form-control     "
             placeholder="Event management requirement
              "
              style={{height:'9rem',}}
              value={Eventmanagementrequirement}
               onChange={(e) => setEventmanagementrequirement(e.target.value)}
              
           />
           
          
         </div>
          
          <br></br>
          <button id="btn1" className="btn btn-primary" >
            Send
          </button>
        
          </form>

        </div>
</div>
    </div>
      </div>
      
    </div>
    
  )
}

export default Responsive1;