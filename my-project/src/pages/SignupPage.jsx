import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../actions/authActions";
import { TextField, Button } from "@material-ui/core";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [Email, setemail] = useState("");            
  const [Mobile,setmobile] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setconfirmpassword] = useState("");
  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(username, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
       TextField
        label="Mobile"
        value={mobile}
        onChange={(e) => setmobile(e.target.value)
       
      />
       <TextField
        label="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
       <TextField
        label="ConfirmPassword"
        value={confirmpassword}
        onChange={(e) => setconfirmpassword(e.target.value)}
      />    
<Button>type="submit" variant="contained" color="primary">
        Signup
      </Button>
    </form>
  );
}

export default SignupPage;
