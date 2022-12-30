import React, {useState} from "react";
import './styles.css'

 

function Login ()
{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [store] =useState('');
    const [login] = useState('');

   const loginUser= async (e)=>{
            e.preventDefault();

           const res = await fetch('http://localhost:8080/auth/login',
           {
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                Authorization: "Bearer" + localStorage.getItem("token")
            },
            body:JSON.stringify({
                email,
                password,
                login,
                store
            })

            

           });
           const data = res.json();
           
           if(res.status === 401 || res.status === 500 || !data)
           {
            window.alert('Invalid Credentials');
           }
           else{
          
            window.alert('login Successfull');
            // console.log(res.data.token);
           }
   }

    return(
        <div className="app">
        <div className="login-form">
            <div className="form">
            <div className="title">Sign in</div>
                <form method="POST">
                <div className="input-container">
                <label htmlFor="Email">Email</label>
                    <input type="email" 
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                   
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="Password">Password</label>
                    <input type="Password"
                    name="Password"
                    id="password"
                    autoComplete="off"
                   value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     />
                    </div>
                    <div className="button-container">
                    <button type="submit" 
                    onClick={loginUser}
                    >Login</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}


export default Login;