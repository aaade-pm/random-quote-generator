import { useState, useEffect } from 'react';
import './App.css';


const App = () => {

  const [advice, setAdvice] = useState('');

  // Fetch data from API
  const fetchData = async () => {      
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => setAdvice(data.slip.advice))
    .catch(error => console.log(error));
  }


  // Fetch data on initial render
    useEffect(() => {
      fetchData();
    }, []);

    // Handle button click and fetch data on click
    const handleClick=()=>{fetchData()}

    // Render JSX
    return (
      <div className="container">
        <div className="advice-box">
          <h1>Tell me something!!!</h1>
          <div className="advice">
            <p>{advice}</p>
            <button onClick={handleClick}>Get Advice</button>
          </div>
        </div>
      </div>
    );
  };

export default App