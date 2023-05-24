import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Gas.css'

function Gas(){
    const location=useLocation()

    return (
        <div className="Gas">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>Gas Booking</h1>
            </div>
            <div className="write">
                <input type="text" className="l1" placeholder="Serach your provider" />
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Gas