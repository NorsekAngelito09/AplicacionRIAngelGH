onmessage = evt => {
  postMessage(`el resultado de la multiplicacion es de ${evt.data.num2*evt.data.num1}`);
};
