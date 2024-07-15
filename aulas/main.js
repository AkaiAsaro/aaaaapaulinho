// const peitos = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// function maiusculo (elemento, indice, array){
//  return elemento.toUpperCase();
// }

// const newArr = peitos.map(maiusculo);

// const newArr2 = peitos.map
// console.log(newArr)

// const numeros = [1,3,6,9];

// const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 40);

// console.log("Array original:", numeros);
// console.log("Soma dos números:", soma);

// const numbers = [175, 50, 25];
// const resdult = numbers.reduce(myfunc);

// function myfunc(total, num) {
//     return total - num;
// }

// document.getElementById("demo").innerText = resdult;

const numeros = [50,45,67,89,10,5]

const multiplicapordois = numeros.map(numero => numero * 2);

console.log(multiplicapordois)

const carlinhoscavalos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const cavalospares = carlinhoscavalos.filter(cavalo => cavalo % 2 ===0);

console.log(cavalospares)

const jegues = [1,2,3,4,5,6]

const somas = jegues.reduce((acumulador, numero) => acumulador + numero);

console.log(somas)

// const numeros = [50,45,67,89,10,5]

// const multiplicaaocuadrado = numeros.map(numero => numero ** 2);

// console.log(multiplicaaocuadrado)



// const playertauz = ['peito','mel','brasil', 'ken', 'penaldo']

// const filtragem = 