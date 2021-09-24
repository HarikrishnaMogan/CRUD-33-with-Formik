import axios from "axios";
import { useState,useContext,useEffect} from "react";
import { Context } from "../Context";
import "./components.css";
import EditAndCreateUser from "./subComponents/EditAndCreateUser";

export default function EditUser({match})
{
    
    const[name,setName]= useState("");
    const[email,setEmail] = useState("");
    const[country,setCountry]= useState("")
    const context = useContext(Context);
    const [userNotEdited,setUserNotEdited] = useState(true);
    
    
    //to set the user data in input when clicked editprofile button
    let setInput = async()=>{
        let uservalue = context.users.filter((user)=>user.id===match.params.id)
        //to fetch api and get user if page refreshed
         if(uservalue.length===0)
         {
            const {data} = await axios.get(`https://611f26469771bf001785c730.mockapi.io/users/${match.params.id}`);
            uservalue.push(data);
         }
        uservalue.forEach((user)=>{
            setName(user.name);
            setEmail(user.email);
            setCountry(user.country);
        })
    }

    useEffect(()=>{
      setInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
   
     
   // put method to update values in api,here values are destructured from formik values when clicking submit button
    let PutUser = async({name,email,country})=>{
        const {data} = await axios.put(`https://611f26469771bf001785c730.mockapi.io/users/${match.params.id}`,{
            name:name,
            email:email,
            country:country

        });
      
        console.log(data);
        let tempusers = [...context.users];
        let index = context.users.findIndex((user)=>user.id === match.params.id);
        tempusers[index] = data;
        context.setUsers(tempusers);//upadting new values in context api
        setUserNotEdited(false);//to display confirmation
    }

    
    return(
        <>
        <div className="container">
           { userNotEdited ? 
           (<> 
        <h1 className="text-center text-info">Edit User {match.params.id}</h1>
        <EditAndCreateUser 
        
        name={name}
        email={email}
        country={country}
        PostOrPutuser={PutUser} />
        </>)
        :
        (<>
         <div className="confirmtext">
        <h1>User Edited</h1> 
        <i className="fas fa-check-circle"></i>
        </div>
        </>)}
        </div>
        </>
    );
}