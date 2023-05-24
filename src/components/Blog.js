import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Blog.css'

function Blog(){
    const location=useLocation()

    return (
        <div className="Blog">
            <div className="header">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <h1>Blog</h1>
            </div>
            <div className="write">
                <label className="l1">Write your post</label>
                <button className="but">Write Blog</button>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Blog