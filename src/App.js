import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans.jsx';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
    </div>
  );
}

export default App;
