import Axios from "axios";
import { useEffect, useState } from "react";
import IsVotedListRow from './IsVotedListRow';
import AdminNav from "./AdminNav";
function IsVotedList(){
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://online-voting-app-backend.onrender.com/IsVotedRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <IsVotedListRow obj={val}/>
        })
    }

    return(
        <div>
            <AdminNav/>
            <div class="container col-md-6">
            <table  class="table table-bordered mt-3" >
        
            <thead class="table-info" >
                <tr>
                    <th class="text-center">Id</th>
                    <th class="text-center">Party Voted</th>
                   {/* <th class="text-center">Delete</th> */}
                </tr>
            </thead>
            <tbody className="">
                {ListItems()}
            </tbody>
            
        </table>
            </div>
            
        </div>
        
    )
}
export default IsVotedList;
