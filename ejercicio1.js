function funcionSumatoria(){
  let numero = parseInt(prompt("ingrese un numero menor a 100"));
let sumatoria = 0;
while(!Number.isInteger(numero)||numero>100||numero<1){
  numero = parseInt(prompt("ingrese un numero menor a 100"));
}
for(let i=1; i<=numero;i++){
  sumatoria+=i
}
alert(sumatoria)
}
funcionSumatoria()