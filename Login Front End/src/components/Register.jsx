import { useState } from "react";
import axios from "axios";


function Register() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/employees/save", {
          employeename: employeename,
          email: email,
          password: password,
          });
          alert("Employee Registration Successfully");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1><b><i><u>Horizon-View-Lodge</u> Employee Registration</i></b></h1> <hr/> <hr/>
    
    <form>
        <div class="form-group">
          <label><b>Employee Name :</b></label> <br/> <br/>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter employee name"
          
          value={employeename}
          onChange={(event) => {
            setEmployeename(event.target.value); 
          }}
          /> <br/> <br/>

        </div>

        <div class="form-group">
          <label><b>Email :</b></label> <br/> <br/>
          <input type="email"  class="form-control" id="email" placeholder="Enter emploee mail"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          /> <br/> <br/>
 
        </div>

        <div class="form-group">
            <label><b>Password :</b></label> <br/> <br/>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div> <br/> <br/>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} ><b>Save</b></button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;