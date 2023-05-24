import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Follow_list.css'
import putatoe from './img/putatoe.jpg'

function Follow_list(){
    const location=useLocation()

    return (
        <div className="Follow_list">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>Saved Service Providers</h1>
            </div>
            <div className="menu">
                    <Link className="conn1" to="/"><i class='bx bxs-home'></i><label>Home</label></Link>
                    <Link className="conn2" to="/Follow_list"><i class='bx bx-body'></i><label>Profile</label></Link>
                    <Link className="conn3" to="/Articles"><img src={putatoe} alt="putatoe" /></Link>
                    <Link className="conn4" to="/Follow_list"><i class='bx bx-list-ul'></i><label>Follow List</label></Link>
                    <Link className="conn5" to="/Chat"><i class='bx bx-message-rounded-minus'></i><label>Chat</label></Link>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Follow_list