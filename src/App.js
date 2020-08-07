import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from 'bitmovin-player';
import Config from './Config';

class PlayerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    var player;

    var conf = {
        key: Config.license
    };
    var source = {
        dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        progressive: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
        poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    };

    player = new Player(document.getElementById('player'), conf);
    console.log("License: " + Config.license)
    player.load(source).then(function () {
        console.log('Successfully loaded source '); // Success!
        //player.play()
    }, function () {
        console.log('Error while loading source'); // Error!
    });
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <div className="content">
        <div className="player-wrapper">
          <div id="player"></div>
        </div>
        <div className="description">
          <p>For more information about the bitmovin player, please have a look at our online
          <a href="//bitmovin.com/support" target="_blank">Developer Section</a>.</p>
        </div>
      </div>
    );
  }
}

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
      <PlayerWrapper />
      <Timer />
    </div>
  );
}

export default App;
