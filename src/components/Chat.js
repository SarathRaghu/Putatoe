import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Chat.css'
import putatoe from './img/putatoe.jpg'

function Chat(){
    const location=useLocation()

    return (
        <div className="Chat">
            <div className="header">
                <h1>Chat</h1>
                <i class='bx bxs-contact'></i>
            </div>
            <div className="menu">
                    <Link className="conn1" to="/"><i class='bx bxs-home'></i><label>Home</label></Link>
                    <Link className="conn2" to="/Chat"><i class='bx bx-body'></i><label>Profile</label></Link>
                    <Link className="conn3" to="/Articles"><img src={putatoe} alt="putatoe" /></Link>
                    <Link className="conn4" to="/Follow_list"><i class='bx bx-list-ul'></i><label>Follow List</label></Link>
                    <Link className="conn5" to="/Chat"><i class='bx bx-message-rounded-minus'></i><label>Chat</label></Link>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Chat