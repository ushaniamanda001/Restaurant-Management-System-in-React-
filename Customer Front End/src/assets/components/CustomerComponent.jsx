import React, { useEffect, useState } from 'react';
import { createCustomer,getCustomer, updateCustomer} from '../services/CustomerService';
import {useNavigate, useParams} from 'react-router-dom';

const CustomerComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNo, setContactNo] = useState('')
    
    const {id} = useParams();
    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email:'',
        contactNo:''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getCustomer(id).then((response) => {
               setFirstName(response.data.firstName);
               setLastName(response.data.lastName);
               setEmail(response.data.email);
               setContactNo(response.data.contactNo);
            }).catch(error => {
                console.error(error);
            })
        }
    }, (id))

    
    function saveOrUpdateCustomer(c){
        c.preventDefault();

        const customer = {firstName, lastName, email, contactNo}
        console.log(customer)

        if(validateForm()){

            if(id){
                updateCustomer(id, customer).then((response) => {
                    console.log(response.data);
                    navigator('/customers');
                }).catch(error => {
                    console.error(error);
                })
            }else {
                createCustomer(customer).then((response) => {
                    console.log(response.data);
                    navigator('/customers')
                }).catch(error => {
                    console.error(error);
                })
            }

            const customer = {firstName, lastName, email, contactNo}
            console.log(customer)

            createCustomer(customer).then((response) => {
            console.log(response.data);
            navigator('/customers');
        })
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {...errors} 

        if(firstName.trim()){
            errorsCopy.firstName='';
        }
        else{
            errorsCopy.firstName='First name is required';
            valid = false;
        }


        if(lastName.trim()){
            errorsCopy.lastName='';
        }
        else{
            errorsCopy.lastName='Last name is required';
            valid = false;
        }


        if(email.trim()){
            errorsCopy.email='';
        }
        else{
            errorsCopy.email='Email is required';
            valid = false;
        }


        if(contactNo.trim()){
            errorsCopy.contactNo='';
        }
        else{
            errorsCopy.contactNo='Contact No is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'><b><i>Update Customer</i></b></h2>
        }else{
            return <h2 className='text-center'> <b> <i>Add Customer</i> </b></h2>
        }
    }

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
                pageTitle()
            }
            <h2 className='text-center'></h2>
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'> First Name  </label>
                        <input 
                        type ='text'
                        placeholder='Enter Customer First Name'
                        name='firstName'
                        value={firstName}
                        className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                        onChange={(c) => setFirstName(c.target.value)}>
                        </input>
                        {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'> Last Name  </label>
                        <input 
                        type ='text'
                        placeholder='Enter Customer last Name'
                        name='lastName'
                        value={lastName}
                        className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                        onChange={(c) => setLastName(c.target.value)}>
                        </input>
                        {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'> Email  </label>
                        <input 
                        type ='text'
                        placeholder='Enter Customer Email'
                        name='email'
                        value={email}
                        className={`form-control ${errors.email ? 'is-invalid': ''}`}
                        onChange={(c) => setEmail(c.target.value)}>
                        </input>
                        {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'> Contact No  </label>
                        <input 
                        type ='Text'
                        placeholder='Enter Customer Contact No'
                        name='contactNo'
                        value={contactNo}
                        className={`form-control ${errors.contactNo ? 'is-invalid': ''}`}
                        onChange={(c) => setContactNo(c.target.value)}>
                        </input>
                        {errors.contactNo && <div className='invalid-feedback'> {errors.contactNo} </div>}
                    </div>
                    <button className='btn btn-success' onClick={saveOrUpdateCustomer}> Submit </button>

                </form>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default CustomerComponent
