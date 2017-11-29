import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC7eFa6_IZn9k5R4n17A5HgGPFdQZCnVrA",
  authDomain: "respuesta-positiva-f3d86.firebaseapp.com",
  databaseURL: "https://respuesta-positiva-f3d86.firebaseio.com",
  projectId: "respuesta-positiva-f3d86",
  storageBucket: "respuesta-positiva-f3d86.appspot.com",
  messagingSenderId: "1095933261022"
};

  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database());

  export {base};