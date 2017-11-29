import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const config = {
  apiKey: "AIzaSyC7eFa6_IZn9k5R4n17A5HgGPFdQZCnVrA",
  authDomain: "respuesta-positiva-f3d86.firebaseapp.com",
  databaseURL: "https://respuesta-positiva-f3d86.firebaseio.com",
  projectId: "respuesta-positiva-f3d86",
  storageBucket: "respuesta-positiva-f3d86.appspot.com",
  messagingSenderId: "1095933261022"
};

firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    }
  }

  componentWillMount() {
    const nameRef = firebase.database().ref().child('object').child('name');
    nameRef.on('value', (snapshot) => {
      this.setState({
        name: snapshot.val()
      })
    })
  }  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SRF Consultores SAS</h1>
        </header>
        <h1>
          {this.state.name}
        </h1>
      </div>
    );
  }
}

export default App;
