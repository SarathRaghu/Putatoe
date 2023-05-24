import './App.css';
import Home from "./components/Home"
import Mobile from "./components/Mobile"
import DTHrecharge from "./components/DTHrecharge"
import Loans from "./components/Loans"
import Promotion from "./components/Promotion"
import News from "./components/News"
import Blog from "./components/Blog"
import Jobs from "./components/Jobs"
import Feedbacks from "./components/Feedbacks"
import Gas from "./components/Gas"
import Electricity from "./components/Electricity"
import Water from "./components/Water"
import More from "./components/More"
import Mycart from "./components/Mycart"
import Notification from "./components/Notification"
import Search from "./components/Search"
import Profile from "./components/Profile"
import Articles from "./components/Articles"
import Follow_list from "./components/Follow_list"
import Chat from "./components/Chat"
import Location from "./components/Location"


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Mobile" element={<Mobile/>}/>
            <Route path="/DTHrecharge" element={<DTHrecharge/>}/>
            <Route path="/Loans" element={<Loans/>}/>
            <Route path="/Promotion" element={<Promotion/>}/>
            <Route path="/News" element={<News/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Jobs" element={<Jobs/>}/>
            <Route path="/Feedbacks" element={<Feedbacks/>}/>
            <Route path="/Gas" element={<Gas/>}/>
            <Route path="/Electricity" element={<Electricity/>}/>
            <Route path="/Water" element={<Water/>}/>
            <Route path="/More" element={<More/>}/>
            <Route path="/Mycart" element={<Mycart/>}/>
            <Route path="/Notification" element={<Notification/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Articles" element={<Articles/>}/>
            <Route path="/Follow_list" element={<Follow_list/>}/>
            <Route path="/Chat" element={<Chat/>}/>
            <Route path="/Location" element={<Location/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;