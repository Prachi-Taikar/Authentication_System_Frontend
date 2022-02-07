import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {

let {loginUser} = useContext(AuthContext)

  return (
    <div>
        <h1>Login Form</h1>
            <form onSubmit = {loginUser}>   
                <label >Username: </label>
                <input type="text" name="username" placeholder="Enter Username" required/><br/><br/>
                <label >Password: </label>
                <input type="password" name="password" placeholder="Enter Password" required/><br/><br/>
                <input type="submit"/>
            </form>
    </div>
  );
};

export default LoginPage;
