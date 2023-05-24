import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Feedbacks.css'

function Feedbacks(){
    const location=useLocation()

    return (
        <div className="feedback">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>Anonymous Feedback</h1>
            </div>
            <div className="write">
                <label className="l1">Write your Anonymous feedback</label>
                <button className="but">SEND FEEDBACK</button>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Feedbacks