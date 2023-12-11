import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'

function Card(){

}

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setResult(response.data));

    //console.log(result);

}, [result]);


  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>body</th>
        </tr>
      </thead>
      {result.map((item) => (<tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        </tr>))}
    </table>
  )
}

export default App
