import React , {Component} from 'react';
import Image from './Image';

class App extends Component{
  render(){
    return(
      <div>
        <Image myImage = {'https://http.cat/409'}/>
      </div>
    )
  }
}
export default App;