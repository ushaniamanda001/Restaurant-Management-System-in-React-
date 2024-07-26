import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/employees/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }

    return (
       <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-6">
                <h1 className="text-center"> <i><b> <u>Horizon-View-Lodge</u></b> - Good Food.Good Mood :)</i></h1> 
                <hr/> <hr/>
                <br/> <br/>
             <hr/>
            <form>
        <div className="form-group text-center">
          <label><b>Email :</b></label> <br/> <br/>
          <input type="email"  class="form-control" id="email" placeholder="Enter email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          /> <br/> <br/>

        </div>

        <div className="form-group text-center">
            <label><b>Password :</b></label> <br/> <br/>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div> <br/> <br/>
                  <button type="submit" class="btn btn-primary" onClick={login} ><b>Login</b></button>
                
              </form>

            </div>
            </div>
            </div>
    );
  }
  
  export default Login;