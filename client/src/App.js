import { useEffect, useState } from 'react';
import './App.css';
function App() {
   const [backEndData,setBackEndData] = useState('');
  const handleSubmit = async ()=>{
    const result = await fetch("/api").then(res=>res.text());
    setBackEndData(result);
  }
  return (
    <div className="App">
      <h1>React App</h1>
      <p>Click the below button to make api call to express</p>
      <button onClick={ handleSubmit }>Submit</button>
      {backEndData}
    </div>
  );
}

export default App;
