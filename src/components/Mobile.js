import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Mobile.css'

function Mobile(){
    const location=useLocation()

    return (
        <div className="Mobile">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>Mobile Recharge</h1>
                <button className="but">History</button>
            </div>
            <div className="content">
                <label className="l1">Mobile Recharge</label>
                <input className="i1" type="text" placeholder="Mobile Number or Open contacts"></input><i class='bx bxs-contact' ></i>
                <label className="l2">Enter your number to get the plans !!</label>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Mobile