var cuenta = 0;
var max = 10;
var min = 0;
var btn_incrementar = document.getElementById("incrementar");
var btn_decrementar = document.getElementById("incrementar");
var input_cuenta = document.getElementById("cuenta");

var btn_decrementar = document.getElementById("decrementar");

btn_incrementar.addEventListener("click", function(){
  input_cuenta.value = cuenta;
  cuenta = cuenta +1;
})

btn_decrementar.addEventListener("click", function(){
  input_cuenta.value = cuenta;
  cuenta = cuenta -1;
})