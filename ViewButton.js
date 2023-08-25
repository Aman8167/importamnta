import React from 'react'
import { useLocation } from 'react-router-dom';
import './ViewButton.css';


  function ViewButton  ()  {
    const location = useLocation();
 const { FormData } = location.state||{};

 
  return (
    <div className="container-fluid">
    <br></br><br></br>
    
<div className="card-1">
<div className="row justify-content-center">

<div className="col-md-8">
<div className="card-body mt-5">
<form>


<h2>Profile Page</h2>
      <p>Name: { FormData.Name}</p>
      <p>Contact: { FormData.contact}</p>
      <p>Email: { FormData.email}</p>







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

export default ViewButton



