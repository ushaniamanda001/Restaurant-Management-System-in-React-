import './App.css'
import CustomerComponent from './assets/components/CustomerComponent'
import FooterComponent from './assets/components/FooterComponent'
import HeaderComponent from './assets/components/HeaderComponent'
import ListCustomerComponent from './assets/components/ListCustomerComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>

   <BrowserRouter>
   <HeaderComponent />
      <Routes>
       {/* //http://localhost:3007*/}
        <Route path='/' element= {<ListCustomerComponent />}></Route>
        {/*//http://localhost:3007/customers*/}
        <Route path='/customers' element= {<ListCustomerComponent />}></Route>
        {/*//http://localhost:3007/add-customer*/}
        <Route path='/add-customer' element= {<CustomerComponent />}></Route>
        {/*//http://localhost:3007/edit-customers/1*/}
        <Route path='/edit-customer/:id' element = {<CustomerComponent />}></Route>
        </Routes> 
      <FooterComponent />
   </BrowserRouter>
    </>
  )
}

export default App
