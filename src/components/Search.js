import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Search.css'

function Search(){
    const location=useLocation()

    return (
        <div className="Search">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>Search Products and Service Providers</h1>
            </div>
            <div className="write">
                <input type="text" className="l1" placeholder="Enter product or service provider name" />
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Search