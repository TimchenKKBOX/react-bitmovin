import React from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { 
          //<img src={logo} className="App-logo" alt="logo" />
        }
        <p>
          Edit <code>src/App.js</code> and save11 to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="content">
        <div className="player-wrapper">
          <div id="player"></div>
        </div>
        <div className="description">
          <p>For more information about the bitmovin player, please have a look at our online
          <a href="//bitmovin.com/support" target="_blank">Developer Section</a>.</p>
        </div>
      </div>
      <Timer />
    </div>
  );
}

export default App;
