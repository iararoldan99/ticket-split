import Hero from '../../components/landing/Hero.jsx';
import Feature from '../../components/landing/Feature.jsx';
import About from '../../components/landing/About.jsx';
import Navbar from '../../layout/Navbar/Navbar.jsx';

const Landing = () => {
  return (
    <div className="flex flex-col mx-auto">
      <Navbar />
      <Hero />
      <Feature />
      <section className='bg-lime-200'>
        <About />
      </section>
    </div>
  );
};

export default Landing;