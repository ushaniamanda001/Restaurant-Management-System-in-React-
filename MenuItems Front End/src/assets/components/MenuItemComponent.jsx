import React, { useEffect, useState } from 'react';
import { createMenuItems, getMenuItems, updateMenuItems } from '../services/MenuItemsService';
import { useNavigate, useParams } from 'react-router-dom';

const MenuItemComponent = () => {
    
    const [menuItemName, setMenuItemName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    
    const {menuId} = useParams();
    const [errors, setErrors] = useState({
        menuItemName:'',
        description:'',
        price:''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if(menuId){
            getMenuItems(menuId).then((response) => {
               setMenuItemName(response.data.menuItemName);
               setDescription(response.data.description);
               setPrice(response.data.price);
            }).catch(error => {
                console.error(error);
            })
        }
    }, (menuId))

    
    function saveOrUpdateMenuItems(m){
        m.preventDefault();

        const menuItems = { menuItemName, description, price}
        console.log(menuItems)

        if(validateForm()){

            if(menuId){
                updateMenuItems(menuId, menuItems).then((response) => {
                    console.log(response.data);
                    navigator('/menuItems');
                }).catch(error => {
                    console.error(error);
                })
            }else {
                createMenuItems(menuItems).then((response) => {
                    console.log(response.data);
                    navigator('/menuItems')
                }).catch(error => {
                    console.error(error);
                })
            }

            const menuItems = { menuItemName, description, price}
            console.log(menuItems)

            createMenuItems(menuItems).then((response) => {
            console.log(response.data);
            navigator('/menuItems');
        })
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {...errors} 

        if(menuItemName.trim()){
            errorsCopy.menuItemName='';
        }
        else{
            errorsCopy.menuItemName='Required';
            valid = false;
        }


        if(description.trim()){
            errorsCopy.description='';
        }
        else{
            errorsCopy.description='Required';
            valid = false;
        }


        if(price.trim()){
            errorsCopy.price='';
        }
        else{
            errorsCopy.price='Required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(menuId){
            return <h2 className='text-center'><b><i>Update Menu Items</i></b></h2>
        }else{
            return <h2 className='text-center'> <b> <i>Add Menu Items</i> </b></h2>
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
                        <label className='form-label'> Menu Item Name  </label>
                        <input 
                        type ='text'
                        placeholder='Enter Menu Item Name'
                        name='menuItemName'
                        value={menuItemName}
                        className={`form-control ${errors.menuItemName ? 'is-invalid': ''}`}
                        onChange={(m) => setMenuItemName(m.target.value)}>
                        </input>
                        {errors.menuItemName && <div className='invalid-feedback'> {errors.menuItemName} </div>}
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'> Description  </label>
                        <input 
                        type ='text'
                        placeholder='Enter Description'
                        name='description'
                        value={description}
                        className={`form-control ${errors.description ? 'is-invalid': ''}`}
                        onChange={(m) => setDescription(m.target.value)}>
                        </input>
                        {errors.description && <div className='invalid-feedback'> {errors.description} </div>}
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'> Price  (Rs.)  </label>
                        <input 
                        type ='text'
                        placeholder='Enter Price'
                        name='price'
                        value={price}
                        className={`form-control ${errors.price ? 'is-invalid': ''}`}
                        onChange={(m) => setPrice(m.target.value)}>
                        </input>
                        {errors.price && <div className='invalid-feedback'> {errors.price} </div>}
                    </div>
                    <button className='btn btn-success' onClick={saveOrUpdateMenuItems}> Submit </button>

                </form>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default MenuItemComponent
