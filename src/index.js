import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      minutes: 0
    }

    this.startTime;
    this.elpasedTime;
  } 

  getTime(){
    this.startTime = Date.now();
    this.elpasedTime = setInterval(() => {
      let setSeconds = Math.round((Date.now() - this.startTime)/1000);

      if(setSeconds % 60 === 0){
        this.startTime = Date.now()
        this.setState(prevState => { 
          return {
            minutes: prevState.minutes + 1,
            seconds: 0
          }
        })
      } else {
        this.setState({seconds: setSeconds});
      }
    }, 1000)
  }

  renderSeconds() {
    return(
      <span> Seconds: {this.state.seconds} </span>
    )
  }

  renderMinutes() {
    return(
      <span>Minutes: {this.state.minutes}</span>
    )
  }
  
  stopTime(){
    this.setState({seconds: 0, minutes: 0});
    clearInterval(this.elpasedTime);
    
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>Press the button and watch the seconds, and then minutes, go by</p>
        {this.renderMinutes()}
        {this.renderSeconds()}
        <button onClick={e => this.getTime()}>Start</button>
        <button onClick={e => this.stopTime()}>Stop</button>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("index"));