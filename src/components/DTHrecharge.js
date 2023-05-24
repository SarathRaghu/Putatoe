import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './DTHrecharge.css'
import Dish from './img/Dish.jpeg'

function DTHrecharge(){
    const location=useLocation()

    return (
        <div className="Dish">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>DTH Recharge</h1>
            </div>
            <div className="Antenna">
                <Link><img src={Dish}></img></Link>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default DTHrecharge