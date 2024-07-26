import './App.css';
import MenuItemComponent from './assets/components/MenuItemComponent';
import FooterComponent from './assets/components/FooterComponent';
import HeaderComponent from './assets/components/HeaderComponent';
import ListMenuItemsComponent from './assets/components/ListMenuItemComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>

   <BrowserRouter>
   <HeaderComponent />
      <Routes>
       {/* //http://localhost:3004*/}
        <Route path='/' element= {<ListMenuItemsComponent/>}></Route>
        {/*//http://localhost:3004/menuItems*/}
        <Route path='/menuItems' element= {<ListMenuItemsComponent/>}></Route>
        {/*//http://localhost:3004/add-menuItems*/}
        <Route path='/add-menuItems' element= {<MenuItemComponent />}></Route>
        {/*//http://localhost:3004/edit-menuItems/1*/}
        <Route path='/edit-menuItems/:menuId' element = {<MenuItemComponent/>}></Route>
        </Routes> 
      <FooterComponent />
   </BrowserRouter>
    </>
  )
}

export default App
