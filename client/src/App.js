import './App.css';
import { useState } from 'react';

const form = {
  display: 'flex',
  gap: '5px'
}
const input = {
  border: '5px',
  borderRadius: '8px',
  marginRight: '5px',
}
function App() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    fetch('http://51.20.3.218:4000/', {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        name: name,
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json());
  }
  return (
    <div className="App">
      <header className="App-header">
        <form style={form} onSubmit={handleSubmit}>
          <label>
            Name:
          </label>
          <input type="text" style={input}   onChange={(e) => setName(e.target.value)} name="name" />
          <input type="submit" style={input} value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
