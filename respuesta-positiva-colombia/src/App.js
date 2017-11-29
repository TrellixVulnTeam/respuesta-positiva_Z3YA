import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { TextField } from 'material-ui';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#273135',
    primary2Color: '#C0FA32'
  },
});

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
      name: null,
      lastname: null
    }
  }

  componentWillMount() {
    const nameRef = firebase.database().ref().child('object').child('name');
    const lastnameRef = firebase.database().ref().child('object').child('lastname');
    
    nameRef.on('value', (snapshot) => {
      this.setState({
        name: snapshot.val()
      })
    })


    lastnameRef.on('value', (snapshot) => {
      this.setState({
        lastname: snapshot.val()
      })
    })

  }
  
  
  render() {
    const nameRef = firebase.database().ref().child('object').child('name');
    const lastnameRef = firebase.database().ref().child('object').child('lastname');
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">SRF Consultores SAS</h1>
          </header>
          <h1>
            {this.state.name}
          </h1>
          <h1>
            {this.state.lastname}
          </h1>
          <TextField onChange={(e,value)=>{nameRef.set(value)}} type='text' fullWidth={true} floatingLabelFixed={true} floatingLabelText='Mensaje 1' name='mensaje1' hintText='Escribe algo'/>
          <TextField onChange={(e,value)=>{lastnameRef.set(value)}} type='text' fullWidth={true} floatingLabelFixed={true} floatingLabelText='Mensaje 2' name='mensaje2' hintText='Escribe algo'/>
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
