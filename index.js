/*

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

let numero = parseInt(prompt("ingrese un numero entero menor que 100"))
let numeroaMostar = 0;
while(!Number.isInteger(numero)||numero>100||numero<1){
  numero = parseInt(prompt("ingrese un numero menor a 100"));
}
numeroaMostar = numero
console.log(numeroaMostar)
for(let i = 0; i<numero-1;i++){
  numeroaMostar = numeroaMostar -1
console.log(numeroaMostar)
}

function cuentaRegresiva() {
  let n = parseInt(prompt("Ingrese un número entero menor que 100"));
  while(!Number.isInteger(n)||n>100||n<1){
    numero = parseInt(prompt("ingrese un numero menor a 100"));
  }
  
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
cuentaRegresiva();





function funcionSumatoriaPares(){
  let numero = parseInt(prompt("ingrese un numero mayor que 10 y menor que 1000"));
let sumatoria = 0;
while(!Number.isInteger(numero)||numero>1000||numero<=10){
  numero = parseInt(prompt("ingrese un numero mayor que 10 y menor que 1000"));
}
for(let i=11; i<=numero;i++){
  if((i%2)===0){
    sumatoria+=i
  }
}
alert('la suma de todos los pares desde 11 hasta el numero '+numero+' es de '+sumatoria)
}
funcionSumatoriaPares()
*/
//declare lo necesario para realizar un café y genere la rutina para realizarlo.

function multiplicar(){
  let numero = parseInt(prompt("ingrese un numero"));
  while(!Number.isInteger(numero)){
    numero = parseInt(prompt("ingrese un numero"));
  };
for(let i = 1; i<=12; i++){
  console.log( numero +" X "+i+" = "+numero*i);
};
};
multiplicar();