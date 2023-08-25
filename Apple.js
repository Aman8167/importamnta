import React, { useState } from 'react';

function apple() {
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Add more form fields as needed
      });
    
      const handleSubmit = async event => {
        event.preventDefault();
    
        try {
          const response = await fetch('https://api.example.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Handle success, reset the form, show a success message, etc.
          } else {
            // Handle errors
          }
        } catch (error) {
          // Handle errors
        }
      };
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      return (
        <div>
          <h1>Submit Form Example</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {/* Add more form fields here */}
            <button type="submit">Submit</button>
          </form>
        </div>
  )
}

export default apple;