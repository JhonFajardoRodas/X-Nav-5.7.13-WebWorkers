self.onmessage = function(event) {
    console.log("Hemos recibido " + event.data);
    var resultado = calcularPrimos(event.data);
    self.postMessage(resultado);
}


calcularPrimos = function(number){
  var n = 1;
  primelist = "";
  search: while (n<number) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
  }
  return primelist;
}
