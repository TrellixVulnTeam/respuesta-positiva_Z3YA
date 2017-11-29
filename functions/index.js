const functions = require('firebase-functions');

 exports.respuesta_function = functions.https.onRequest((request, response) => {
    console.log("Carlos Emilio Soto Fernandez");
    response.send("Hola desde Respuesta Positiva");
 });
