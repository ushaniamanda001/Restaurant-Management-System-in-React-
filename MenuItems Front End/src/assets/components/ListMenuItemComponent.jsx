import React, {useEffect, useState} from 'react';
import { deleteMenuItems, listMenuItems } from '../services/MenuItemsService';
import { useNavigate } from 'react-router-dom';

const ListMenuItemComponent = () => {

    const [menuItems, setMenuItems] = useState([])

    const navigator = useNavigate();

    useEffect(()=>{
       getAllMenuItems(); 
    }, [])

    function getAllMenuItems(){
      listMenuItems().then((response) => {
          setMenuItems(response.data);
      }).catch(error => {
        console.error(error);
      })
    }
    function addNewMenuItems(){
       navigator('/add-menuItems')
    }

    function updateMenuItems(menuId){
      navigator(`/edit-menuItems/${menuId}`)
    }

    function removeMenuItems(menuId){
      console.log(menuId);

      deleteMenuItems(menuId).then((response) => {
        getAllMenuItems();
      }).catch(error => {
        console.error(error);
      })
   }

  return (
    <div className='container'>
      <h2 className='text-center'><b><i>Menu Items</i></b></h2>
      <button className='btn btn-primary mb-2' onClick={addNewMenuItems}>Add New Menu Items</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
              <th><i>Menu ID</i></th>
                <th><i>Item Name</i></th>
                <th><i>Description</i></th>
                <th><i>Price (Rs.)</i></th>
                <th><i>Actions</i></th>
            </tr>
        </thead>
        <tbody>
            {
                menuItems.map(menuItems =>
                    <tr key={menuItems.menuId}>
                        <td>{menuItems.menuId}</td>
                        <td>{menuItems.menuItemName}</td>
                        <td>{menuItems.description}</td>
                        <td>{menuItems.price}</td>
                        <td>
                          <button className='btn btn-info' onClick={() => updateMenuItems(menuItems.menuId)}>Update</button>
                          <button className='btn btn-danger' onClick={() => removeMenuItems(menuItems.menuId)} 
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

export default ListMenuItemComponent
