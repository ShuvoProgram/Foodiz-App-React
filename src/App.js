import './App.css';
import Foods from './component/Foods/Foods';
import Header from './component/Header/Header';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Foods></Foods>
    </div>
  );
}

export default App;
