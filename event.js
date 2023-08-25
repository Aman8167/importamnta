import React from 'react'

function event() {
  return (
    <div>event
        
  <form>
    <div class="form-group">
   
      <input type="text"  id=" Event name" placeholder="Event name (title)"></input><br></br><br></br>
      <input type="text"  id=" customer name" placeholder="Customer name"></input><br></br><br></br>
      <input type="number"  id=" number" placeholder="Phone number"></input><br></br><br></br>
      <input type="email"  id="Email" placeholder="Email id"></input><br></br><br></br>
      
      <div class="ab">
      <input  type="date"  id="Date" placeholder="Date"></input>
      <input  type="Time"  id="time" placeholder="Time"></input></div><br></br>
      
     <div class="bc">
      <input type="text"  id="time" placeholder="Venue"></input><br></br><br></br></div>
      <input type="text"  id=" advance payment" placeholder="Advance Payment $"></input><br></br><br></br>
      <input type="text"  id=" payment remaining" placeholder="Payment remaining"></input><br></br><br></br>
      <div class="dc">
      <input type="text"  id="Total payment" placeholder="Total payment"></input></div><br></br>
      <select class="select">
       <option selected>Status</option>
       <option value="1">one</option>
       <option value="1">one</option>
       <option value="1">one</option>
      </select><br></br><br></br>
      <button >Cancel</button>
      <button  >Action</button>
    </div>
   
  </form>
    </div>
  )
}

export default event