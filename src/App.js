import './App.css';
import { useState,useEffect } from 'react';
import BubbleLoader from './component/BubbleLoader';
import Home from './pages/Home';


function App() {
 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? <BubbleLoader /> : <Home />}
    </div>
  );
}

export default App;
