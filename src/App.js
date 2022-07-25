import Header from './components/Header/Header';
import Home  from "./components/Home/Home";
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Skilss from './components/Skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
// import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <Home />
    <Nav/>
    <About/>
    <Skilss />
    <Services />
    <Portfolio />
    {/* <Testimonials/> */}
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
