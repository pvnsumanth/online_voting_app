import Axios from "axios";
import { useEffect, useState } from "react";
import AdminListRow from './AdminListRow';
import { Link, useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";
function AdminsList(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://online-voting-app-backend.onrender.com/AdminsRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <AdminListRow  obj={val}/>
        })
    }

    return(
        <div>
            <AdminNav/>
            <Link to={"/Admin/AddAdmin/"+id}><button class="mx-5 mt-5 btn " style={{backgroundColor:"rgb(43,24,155)",color:"white"}}>Add A Admin</button></Link>
    <div style={{overflowX:"auto"}}>
            <table  class="container table table-bordered mt-3">
            <thead class="table-info ">
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">username</th>
                    <th class="text-center">Phone Number</th>
                    
                    <th class="text-center">email</th>
                    <th class="text-center">address</th>
                    <th class="text-center">password</th>
                    <th class="text-center">Delete / Edit</th>
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
export default AdminsList;
