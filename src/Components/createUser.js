import "./components.css";
import axios from "axios";
import {useState,useContext} from "react";
import {Context} from "../Context";

import EditAndCreateUser from "./subComponents/EditAndCreateUser";
function CreateUser(props)
{
  
    const [name] = useState("");
    const[email] = useState("");
    const[country] = useState("");
     const context = useContext(Context);
     const[useradded,setUseradded] = useState(true);

    //to post user to API ,the values are destructured from fromik values when clicking submit button
   let postuser= async({name,email,country})=>{
      const{data} = await axios.post("https://611f26469771bf001785c730.mockapi.io/users",
      {
          name:name,
          email:email,
          country:country
      });
    
      console.log(data);
      let tempusers = [...context.users];
      tempusers.push(data);
      console.log(tempusers);
      context.setUsers(tempusers);
      setUseradded(false);
     // props.history.push("/"); if this line is uncommented, on submit the form it will redirect the page to users page

   }


    

    return(
        <>
        <div className="container">
        {useradded ? (<>
            <h1 className="text-center text-info">Create User</h1>
            <EditAndCreateUser 
            name={name}
            email={email}
            country={country}
            PostOrPutuser={postuser} />
        </>)
        :
        (
        <>
        <div className="confirmtext">
        <h1>User added</h1>
        <i className="fas fa-check-circle"></i>
        </div>
        </>)}
       
        </div>
        </>
    );
}
export default CreateUser;