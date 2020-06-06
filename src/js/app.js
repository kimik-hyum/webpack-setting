import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  PostData = () => {
    axios({
      method:'post',
      url:'http://localhost:1337/portfolios',
      data:{
        title1:'야호',
        text2:'text'
      }
    })
  }
  render() {
    return (
      <div>
        Hellow World!!
        <button onClick={this.PostData}>123</button>
      </div>
    );
  }

}


export default App;

ReactDOM.render(<App />, document.getElementById('app'))