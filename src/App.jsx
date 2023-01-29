import { useEffect } from 'react';
import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Products ,Specialities, Hero, Mission, Header, Footer, FormModal } from './containers'
import { useFormContext } from './context';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 150,
    })
  })

  const { form } = useFormContext()

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
        {form.opened && <FormModal />}
    </div>
  );
}

export default App;
