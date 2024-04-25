import Axios from "axios";
import { useEffect, useState } from "react";
import VoterListRow from './VoterListRow';
import { Link, useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";
function VotersList(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://online-voting-app-backend.onrender.com/VoterListRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <VoterListRow  obj={val}/>
        })
    }

    return(
        <div>
            <AdminNav/>
            <Link to={"/Admin/AddVoter/"+id}><button class="mx-5 mt-5 btn " style={{backgroundColor:"rgb(43,24,155)",color:"white"}}>Add A Voter</button></Link>
    <div style={{overflowX:"auto"}}>
            <table  class="container table table-bordered mt-3">
            <thead class="table-info ">
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Id</th>
                    <th class="text-center">Phone Number</th>
                    
                    <th class="text-center">Address</th>
                    <th class="text-center">Date of Birth</th>
                    <th class="text-center">Gender</th>
                    <th class="text-center">Delete</th>
                </tr>
            </thead>
            <tbody >
                {ListItems()}
            </tbody>
            
        </table>
    </div>
        </div>
        
    )
}
export default VotersList;
