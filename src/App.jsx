import { useEffect } from 'react';
import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Products ,Specialities, Hero, Mission, Header, Footer, Testimonials } from './containers'

function App() {

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 200,
    })
  })

  return (
    <div className="App">
      <Header />
      <div className="deco" />
      <Hero />
      <Mission />
      <Specialities />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
