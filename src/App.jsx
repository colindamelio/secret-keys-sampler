import {useState, useEffect} from 'react';

function App() {
 
 const [data, setData] = useState([]);

 useEffect(() => {
 
  const url = new URL('http://localhost:4000');

  fetch(url)
    .then(response => response.json())
    .then(jsonData => setData(jsonData))

 }, [])

  return (
    <div className="App">
      <h1>Secret React</h1>
      {
        data.map(({id, title}) => {
          return (
            <div key={id}>
              <h2>{title}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
