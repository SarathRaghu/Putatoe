import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Home.css'
import putatoe from './img/putatoe.jpg'
import add from './img/add.jpg'
import c1 from './img/1.jpeg'
import E1 from './img/E1.jpeg'
import E3 from './img/E3.jpeg'
import E2 from './img/E2.jpeg'
import F1 from './img/F1.jpeg'
import F2 from './img/F2.jpeg'
import F3 from './img/F3.jpeg'
import F4 from './img/F4.jpeg'
import F5 from './img/F5.jpeg'
import F6 from './img/F6.jpeg'
import F7 from './img/F7.jpeg'
import F8 from './img/F8.jpeg'
import F9 from './img/F9.jpeg'
import F10 from './img/F10.jpeg'
import S1 from './img/S1.jpeg'
import S2 from './img/S2.jpeg'
import S3 from './img/S3.jpeg'
import S4 from './img/S4.jpeg'
import S5 from './img/S5.jpeg'
import S6 from './img/S6.jpeg'
import S7 from './img/S7.jpeg'
import S8 from './img/S8.jpeg'
import S9 from './img/S9.jpeg'
import S10 from './img/S10.jpeg'

function Home(){
    const location=useLocation()

    return (
        <div className="homepage">
            <React.Fragment>
            <section>
                <div className="header">
                    <i class='bx bx-location-plus'></i><Link to="/Location" className="location"></Link>
                    <label className="Locl">Harwa Fatak Nirala Nagar,Gorakhpur,Nirala Nagar,Uttar Pradesh,273004,India</label>
                    <Link className="noti" to="/Notification"><i class='bx bxs-bell'></i></Link>
                    <Link className="cart" to="/Mycart"><i class='bx bx-cart-add'></i></Link>
                    
                    <Link className="search" to="/Search"><i class='bx bx-search'></i><label className="l1">Search for Products...</label></Link>
                    <div className="mic">
                        <i class='bx bxs-microphone' ></i>
                    </div>
                </div>
                <div className="advertisement">
                    <img src={add} alt="add"></img>
                </div>
                <div className="contents">
                    <Link className="conn1" to="/Mobile"><i class='bx bx-mobile'></i><label className="l1">Prepaid Mobile</label><label className="l2">Recharge</label></Link>
                    <Link className="conn2" to="/DTHrecharge"><i class='bx bx-tv'></i><label>DTH Recharge</label></Link>
                    <Link className="conn3" to="/Loans"><i class='bx bx-rupee'></i><label>Loans</label></Link>
                    <Link className="conn4" to="/Promotion"><i class='bx bx-speaker'></i><label>Promotion</label></Link>
                    <Link className="conn5" to="/News"><i class='bx bx-news'></i><label>News</label></Link>
                    <Link className="conn6" to="/Blog"><i class='bx bxl-blogger' ></i><label>Blog</label></Link>
                    <Link className="conn7" to="/Jobs"><i class='bx bxs-group'></i><label>Jobs</label></Link>
                    <Link className="conn8" to="/Feedbacks"><i class='bx bx-comment-detail'></i><label className="l1">Anonymous</label><label className="l2">Feedback</label></Link>
                    <Link className="conn9" to="/Gas"><i class='bx bxs-hot' ></i><label>GAS Booking</label></Link>
                    <Link className="conn10" to="/Electricity"><i class='bx bx-bulb' ></i><label>Electricity Bill</label></Link>
                    <Link className="conn11" to="/Water"><i class='bx bx-droplet' ></i><label>Water Bill</label></Link>
                    <Link className="conn12" to="/More"><i class='bx bxs-chevron-right-circle'></i><label>See More</label></Link>
                </div>
                <div className="footer">
                    <div className="fi">
                        <h1>SHOP BY CATEGORY</h1>
                    </div>  
                    <div className="se">
                        <h1>Construction</h1>
                        <div className="se1"></div>
                        <Link to="#"><img src={c1}></img></Link>
                    </div>
                    <div className="thi">
                        <h1>Popular Serice Products</h1>
                    </div>
                    <div className="fo">
                        <h1>Construction</h1>
                        <div className="fo1"></div>
                    </div>
                    <div className="fo2">
                            <div className="f1"><Link><img src={F1}></img></Link></div>
                            <div className="f2"><Link><img src={F2}></img></Link></div>
                            <div className="f3"><Link><img src={F3}></img></Link></div>
                            <div className="f4"><Link><img src={F4}></img></Link></div>
                            <div className="f5"><Link><img src={F5}></img></Link></div>
                            <div className="f6"><Link><img src={F6}></img></Link></div>
                            <div className="f7"><Link><img src={F7}></img></Link></div>
                            <div className="f8"><Link><img src={F8}></img></Link></div>
                            <div className="f9"><Link><img src={F9}></img></Link></div>
                            <div className="f10"><Link><img src={F10}></img></Link></div>
                        </div>
                    <div className="fiv">
                        <h1>All Popular Serice Products</h1>
                    </div>
                    <div className="six">
                        <h1>Construction</h1>
                        <div className="si1"></div>
                    </div>
                    <div className="si2">
                        <div className="f1"><Link><img src={S1}></img></Link></div>
                        <div className="f2"><Link><img src={S2}></img></Link></div>
                        <div className="f3"><Link><img src={S3}></img></Link></div>
                        <div className="f4"><Link><img src={S4}></img></Link></div>
                        <div className="f5"><Link><img src={S5}></img></Link></div>
                        <div className="f6"><Link><img src={S6}></img></Link></div>
                        <div className="f7"><Link><img src={S7}></img></Link></div>
                        <div className="f8"><Link><img src={S8}></img></Link></div>
                        <div className="f9"><Link><img src={S9}></img></Link></div>
                        <div className="f10"><Link><img src={S10}></img></Link></div>
                    </div>
                    <div className="sev">
                        <h1>Services We Provide</h1>
                    </div>
                    <div className="eig">
                        <div className="ei1"><Link><img src={E1}></img></Link></div>
                        <div className="ei2"><Link><img src={E2}></img></Link></div>
                        <div className="ei3"><Link><img src={E3}></img></Link></div>
                    </div>
                </div>
                <div className="menu">
                    <Link className="conn1" to="/"><i class='bx bxs-home'></i><label>Home</label></Link>
                    <Link className="conn2" to="/Profile"><i class='bx bx-body'></i><label>Profile</label></Link>
                    <Link className="conn3" to="/Articles"><img src={putatoe} alt="putatoe" /></Link>
                    <Link className="conn4" to="/Follow_list"><i class='bx bx-list-ul'></i><label>Follow List</label></Link>
                    <Link className="conn5" to="/Chat"><i class='bx bx-message-rounded-minus'></i><label>Chat</label></Link>
                </div>
            <div className="switch">
               <Link className="conn3" to="#"><img src={putatoe} alt="putatoe" /></Link>
            </div> 
        </section>
        </React.Fragment>


            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Home