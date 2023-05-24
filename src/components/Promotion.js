import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Promotion.css'

function Promotion(){
    const location=useLocation()

    return (
        <div className="Post">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>Post</h1>
            </div>
            <div className="write">
                <i class='bx bxs-contact'></i><label className="l1">Want to upload new post ? Click here</label>
                <button className="but">Upolad</button>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Promotion