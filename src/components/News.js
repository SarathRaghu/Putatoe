import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './News.css'

function News(){
    const location=useLocation()

    return (
        <div className="News">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>News</h1>
            </div>
            <div className="write">
                <i class='bx bx-search' ></i>
                <input type="text" className="l1" placeholder="Serach News" />
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default News