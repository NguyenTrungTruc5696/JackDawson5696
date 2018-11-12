import React, {Component} from 'react';
import './App.css';
 import Footer from './Footer'

 class App extends Component {
     render() {
         return (
             <div className = "App">
             <p>
                 Welcome to React!
             </p>
       <headers className="App-header">
  <p>
    <a 
    className ="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer">
        Hello
    </a>
  </p>
</headers>
<Footer></Footer>
</div>
);
}
}
export default App;