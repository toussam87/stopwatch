import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      minutes: 0
    }

    this.elpasedTime
  } 

  getTime(){
    let startTime = Date.now();
    this.elpasedTime = setInterval(() => {
      let setSeconds = Math.round((Date.now() - startTime)/1000);
      this.setState({seconds: setSeconds});
      
      this.state.seconds % 60 === 0 ? this.setState(prevState => { return {minutes: prevState.minutes + 1 }}) : ''
    }, 1000)
  }
  
  stopTime(){
    clearInterval(this.elpasedTime)
    this.setState({seconds: 0, minutes: 0})
  }

  render() {
    return (
    <div>
      <h1>Hello</h1>
      <p>Press the button and watch the seconds, and then minutes, go by</p>
      <span>Minutes: {this.state.minutes} </span> 
      <span>Seconds: {this.state.seconds} </span>
      <button onClick={e => this.getTime()}>Start</button>
      <button onClick={e => this.stopTime()}>Stop</button>
    </div>
      );
  }
};

ReactDOM.render(<App />, document.getElementById("index"));