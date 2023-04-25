/*let numero = parseInt(prompt("ingrese un numero menor a 100"));
let sumatoria = 0;
while(!Number.isInteger(numero)||numero>100||numero<1){
  numero = parseInt(prompt("ingrese un numero menor a 100"));
}
for(let i=1; i<=numero;i++){
  sumatoria+=i
}
alert(sumatoria)*/
let primo = true 
let calcularPrimo = function(){
  let numero = parseInt(prompt("ingrese un numero"));
  while(!Number.isInteger(numero)){
    numero = parseInt(prompt("ingrese un numero menor a 100"));
  }
  if((numero/numero)===1&&(numero/1)===numero){
    for(let i = 2; i < numero; i++){
      if (numero % i === 0) {
        primo = false;
      }
    }
  }
  if(primo){
    alert("el numero es primo")
  }else{
    alert("el numero no es pariente")
  }
  
}
calcularPrimo();
