import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Location.css'

function Location(){
    const location=useLocation()

    return (
        <div className="Location">
            <div className="header">
                <i class='bx bx-location-plus' ></i>
                <h1>Harwa Fatak Nirala Nagar,Gorakhpur,Nirala Nagar,Uttar Pradesh,273004,India</h1>
            </div>
            <div className="write">
                <input type="text" className="l1" placeholder="Enter Address" />
            </div>
            <div className="wr2">
                <input type="text" className="l1"/>
                <label className="la1"><i class='bx bx-current-location' ></i>Your Current Location</label>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Location