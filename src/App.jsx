import { useEffect } from 'react';
import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Products ,Specialities, Hero, Mission, Header, Footer } from './containers'

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 150,
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
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
