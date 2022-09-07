function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5.25;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Você tem R$ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorElemento2 = document.getElementById("valor1");
  var valor1 = valorElemento2.value;
  var valorEmRealNumerico = parseFloat(valor1);
  var valorEmDolar = valorEmRealNumerico * 0.19;
  var elementoValorConvertido1 = document.getElementById("valorConvertido1");
  var valorConvertido1 = "Você tem $ " + valorEmDolar.toFixed(2);
  elementoValorConvertido1.innerHTML = valorConvertido1;
}