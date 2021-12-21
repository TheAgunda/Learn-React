
import React from "react";
import reactDom from "react-dom";


//Refs in React 
class QuantityIncreament extends React.Component {
  constructor(props) {
    super(props);

    this.quantityRef = React.createRef()

  }
  increatmentQuantity = () => {
    this.quantityRef.current.value++;
  }
  render() {
    alert("This is my first alert");
    return (<div>
      <p>

        <label>
          Enter Quantity:
        </label>
        <input type="text" ref={this.quantityRef} />
        <button onClick={this.increatmentQuantity}>+</button>
      </p>
    </div>)
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();

  }
  componentDidMount() {
    this.usernameRef.current.focus();
  }
  render() {
    return (<div>
      <label>
        Username
      </label>
      <input type="text" ref={this.usernameRef} />
      <label>
        Password
      </label>
      <input type="password" />
      <button>Login</button>
    </div>)
  }
}


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  playVideo = () => {
    this.videoRef.current.play();
  }
  pauseVideo = () => {
    this.videoRef.current.pause();
  }
  render() {
    return (<div>

      Video Player
      <video width="500" controls  ref={this.videoRef} >

        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"></source>
      </video>
      <div>

        <button onClick={this.playVideo}>Play</button>
        <button onClick={this.pauseVideo}>Pause</button>
      </div>
    </div>)
  }

}

const app = <VideoPlayer></VideoPlayer>
reactDom.render(app, document.getElementById('application'))