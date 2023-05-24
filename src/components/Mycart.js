import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Mycart.css'

function Mycart(){
    const location=useLocation()

    return (
        <div className="Mycart">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>Mycart</h1>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Mycart