import React,{useState} from 'react';
import './learning.css';
// import axios from 'axios';


// const App = () => {

//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/photos`)
//     .then(response => {
//       console.log(response);
//       setPhotos(response.data)
//     })
//   }, [])
  

//   return (
//     <ul>{photos.map(photo => <li key={photo.id}>{photo.title}</li>)}</ul>
//   )
// }

const App = () =>{

const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    if(counter > 0){
    setCounter(count => count - 1)};
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );


  }



export default App;