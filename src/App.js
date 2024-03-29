// import React,{useState} from 'react';
// import './learning.css';
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

// const App = () =>{

// const [counter, setCounter] = useState(0);
 
//   //increase counter
//   const increase = () => {
//     setCounter(count => count + 1);
//   };
 
//   //decrease counter
//   const decrease = () => {
//     if(counter > 0){
//     setCounter(count => count - 1)};
//   };
 
//   //reset counter 
//   const reset = () =>{
//     setCounter(0)
//   }
 
//   return (
//     <div className="counter">
//       <h1>React Counter</h1>
//       <span className="counter__output">{counter}</span>
//       <div className="btn__container">
//         <button className="control__btn" onClick={increase}>+</button>
//         <button className="control__btn" onClick={decrease}>-</button>
//         <button className="reset" onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );


//   }



// export default App;

// import React from 'react';


// class App extends React.Component {

//    state = {seconds: 0 }

//   tick(){
//     this.setState((prevState)=>({seconds: prevState.seconds+1}))
//   }
 
//    componentDidMount(){
//     this.interval = setInterval(()=>this.tick(),100)
//    }

//   render(){
//     return (
//       <div>seconds:{this.state.seconds} </div>
//     )
//   }
// }

// export default App;

// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { seconds: 10, pause: '' };
  
//   }
//   tick() {
//     if (this.state.seconds === 0 || this.state.pause === 'pause') 
//     return;
//     else {
//       this.setState(prevState => ({
//         seconds: prevState.seconds - 1
//       }));
//     }
//   }



//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (<>
//     <h1>Seconds: {this.state.seconds}</h1>
//     <button onClick={()=> this.setState({pause: 'pause'})}>pause</button>
//     <button onClick={()=>this.setState({seconds: 10, pause: ''})}> reset count</button>
//     </>)
//   }
// }

// export default App;

import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Pics from './components/pages/Pics'
import Videos from './components/pages/Videos'
import Wiki from './components/pages/Wiki'
import News from './components/pages/News'
import Home from './components/pages/Home'
import history from './history'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

return (
  <div className='ui container' style={{marginTop:'30px'}}>
    <BrowserRouter history={history}>
      <Header />
      <div>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/pics' element={<Pics/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/wiki' element={<Wiki/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
)
}

export default App;