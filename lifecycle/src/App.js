import React,{Component} from 'react';
import './App.css';
import { loremIpsum } from "lorem-ipsum";

class App extends Component {
  componentDidMount(){
    setTimeout(function(){ alert("Hello"); }, 2000);
  }
  componentWillMount() {

    alert("Hello Stranger")
  }

render() {
  return (
    <div className='App'>
    <header className='App-header'>
      <p>
      <lorem>Hi Stranger</lorem>
      </p>
      
    </header>
  </div>
  )

}
}

export default App;