import Aboute from './components/Aboute/Aboute.js';
import Contact from './components/Contact/Contact.js';
import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Services from './components/Services/Services.js';
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Aboute/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
