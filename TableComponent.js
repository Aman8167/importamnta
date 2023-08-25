import React from 'react'
import './TableComponent.css';

    const TableComponent = () => {
      const data = [
        { fname: 'John', lname: 'Doe', age: 25, address: '123 Main St', email: 'john@example.com' },
        { fname: 'Jane', lname: 'Smith', age: 30, address: '456 Elm St', email: 'jane@example.com' },
        // Add more data rows here
      ];
    
      return (
        <div className="container-fluid ">
          
          <table className="table-container table table-striped table-hover">
          <div class="row justify-content-center" >
          <div class="col-lg-12">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>sum</th>
                <th>Address</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger ml-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
            </div>
          </div>
          </table>
          
        </div>
      );
    };
    
    export default TableComponent;
 