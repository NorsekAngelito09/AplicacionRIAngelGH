const functions = require('firebase-functions');
exports.multiplicacion = functions.https.onRequest(
  (request, response) => {
    try {
      if (!request.query.num1) {
        throw new Error("Falta el numero 1");
    } else if (!request.query.num2) {
        throw new Error("Falta el numero 2");
      }
      response.send(
        `El resultado de la multiplicacion es de ${request.query.num2*request.query.num1}`);
    } catch (e) {
      response.send(e.message);
    }
  });
