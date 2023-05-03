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
  const [showBtnDark ,setShowBtnDark] = useState(false);
  const [dark , setDark] = useState(false);
  console.log(dark);
  const darkHandler = () =>{
    setShowBtnDark(!showBtnDark);
  }
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
    <div className={dark ? 'app dark-mode' : 'app'}>
      <Header />
      <Home />
      <Aboute />
      <Services dark={dark}/>
      <Portfolio />
      <Contact />
      <Footer />
      <a href="#" className={showBtn ? 'to-top active' : 'to-top'}><FaChevronUp/></a>
      <div className={showBtnDark ? 'darkmode active' : 'darkmode'}>
        <div className="dark-item">
          <p>{dark ? 'حالت دارک فعال است' : 'حالت روشن فعال است'}</p>
          <lable className="switch" onClick={()=> setDark(!dark)}>
            <input type="checkbox"
            checked={dark}  
            onChange={()=> setDark(!dark)}
            />
            <span className="slider round"></span>
          </lable>
        </div>
        <div className="btn" onClick={darkHandler}>
          <i className="fas fa-cog"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
