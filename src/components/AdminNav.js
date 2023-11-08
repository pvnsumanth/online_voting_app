import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function AdminNav(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const handleLogout = () => {
        id=null;
        window.location.href=window.location.origin;
      };
    return(
        <nav class="navbar  " style={{backgroundColor:"rgba(255, 99, 71, 0.2)"}}>
            <div class="nav" >
                <Link to={"/Admin/Home/"+id} class="nav-link text-dark " style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Home</Link>
                <Link to={"/Admin/VoterList/"+id} class="nav-link text-dark" style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Voters list</Link> 
                <Link to={"/Admin/PartyList/"+id}class="nav-link text-dark" style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Parties list</Link>  
                <Link to={"/Admin/IsVotedList/"+id} class="nav-link text-dark" style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Voted List</Link>  
                <Link to={"/Admin/Results/"+id} class="nav-link text-dark" style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Results</Link>  
                {id === "654718d311503067da7ec963" && (<Link  to={"/Admin/AdminsList/"+id }class="nav-link text-dark" style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Manage Admins</Link>  )}   
                <Link  to={"/Admin/Profile/"+id }class="nav-link text-dark" style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Profile</Link>     
                
            </div>
            <div class="nav">
                <button onClick={handleLogout} class="btn  " style={{marginRight:"20px",backgroundColor:"rgb(43,24,155)",color:"White"}}>Log Out</button>
            </div>
        </nav>
    )
}
export default AdminNav;