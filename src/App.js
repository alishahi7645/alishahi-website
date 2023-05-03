import Aboute from './components/Aboute/Aboute.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Services from './components/Services/Services.js';
import './index.css'
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Aboute/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
