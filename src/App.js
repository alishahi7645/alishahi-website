import Aboute from "./components/Aboute/Aboute.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Services from "./components/Services/Services.js";
import {FaChevronUp} from 'react-icons/fa';
import "./index.css";
import { useEffect, useState } from "react";
function App() {
  const [showBtn , setShowBtn] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',function(){
      if(this.window.pageYOffset > 400){
        setShowBtn(!showBtn)
      }else{
        setShowBtn(false)
      }
    })
  },[])
  return (
    <div>
      <Header />
      <Home />
      <Aboute />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <a href="#" className={showBtn ? 'to-top active' : 'to-top'}><FaChevronUp/></a>
      <div className="darkmode">
        <div className="dark-item">
          <p>دارک مود</p>
          <lable className="switch">
            <input type="checkbox" name="" id="" />
            <span className="slider round"></span>
          </lable>
        </div>
        <div className="btn">
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
