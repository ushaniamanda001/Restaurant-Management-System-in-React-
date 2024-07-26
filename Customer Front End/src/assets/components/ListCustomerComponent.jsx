import React, {useEffect, useState} from 'react';
import { listCustomers, deleteCustomer } from '../services/CustomerService';
import { useNavigate } from 'react-router-dom';


const ListCustomerComponent = () => {

    const [customers, setCustomers] = useState([])

    const navigator = useNavigate();

    useEffect(()=>{
       getAllCustomers(); 
    }, [])

    function getAllCustomers(){
      listCustomers().then((response) => {
          setCustomers(response.data);
      }).catch(error => {
        console.error(error);
      })
    }
    function addNewCustomer(){
       navigator('/add-customer')
    }

    function updateCustomer(id){
      navigator(`/edit-customer/${id}`)
    }

    function removeCustomer(id){
      console.log(id);

      deleteCustomer(id).then((response) => {
        getAllCustomers();
      }).catch(error => {
        console.error(error);
      })
   }

  return (
    <div className='container'>
      <h2 className='text-center'><b><i>List of Customers</i></b></h2>
      <button className='btn btn-primary mb-2' onClick={addNewCustomer}>Add Customer</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
              <th><i>ID</i></th>
                <th><i>First Name</i></th>
                <th><i>Last Name</i></th>
                <th><i>Email</i></th>
                <th><i>Contact No</i></th>
                <th><i>Actions</i></th>
            </tr>
        </thead>
        <tbody>
            {
                customers.map(customer=>
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.contactNo}</td>
                        <td>
                          <button className='btn btn-info' onClick={() => updateCustomer(customer.id)}>Update</button>
                          <button className='btn btn-danger' onClick={() => removeCustomer(customer.id)} 
                            style={{margineLeft: '10px'}}>
                            Delete </button>
                        </td>
                    </tr>)
            } 
            <tr>

            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListCustomerComponent
