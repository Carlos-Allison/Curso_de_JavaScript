let input = prompt('Digite um número: ');

alert ("O número digitado é: " + input);

//boolean
var a = true;
var b = false;

//Number
var c = 10;
var d = 13.5;

//String
var e = "teste";

//Undefined
var f;
var g = undefined;

//function
var a = function(){};
var b = () => {};

const pi = 3.14;

//Object
var c = {};
var d = []; //array
var e = null


let condicao = x > 0;
if(condicao){
    console.log('X é maior que zero');
}

else{
    console.log("X é menor que zero");
}

if(x > 0){
    console.log("X é positivo");
}
else if(x == 0){
    console.log("X é xero");
}
else{
    console.log("X é negativo");
}

let pariedade = x % 2 === 0 ? 'par' : 'impar';

let hoje = new Date().getDay(); 
let dia;

switch (hoje) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
     dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}


let sinal = 'azul';
switch(sinal){
    case 'verde' : 
        console.log('pode passar');
        break;
    case 'amarelo' :
        console.log('prestes a fechar, cuidado...');
        break;
    case 'vermelho':
        console.log('fechado, não passe');
        break;
    default:
        console.log('esse não é um valor válido');
        break;
}

let count = 0; 
while(count < 100){
    console.log(count);
    count++;
}

let count = 0; 
do{
    console.log(count);
    count++;
}
while(count < 100);

for(let i = 0; i < 10; i++){
    console.log(i+1);
}

let vetor = [1,2,3,4,5,6,7,8,9,10];

let vetor = [];
vetor[0] = 'teste';
vetor[1] = 'teste2';

vetor['indice1'] = 'teste';
vetor['indice2'] = 'teste2';

let vetor = [1,2,3,'a','b','c',true,false];
let primeiro_elemento = vetor[0];
let quinto_elemento = vetor[4];

let vetor = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}

const vetor = [10,20,30,40,50];
for(let valor of vetor){
    console.log(valor);
}

const vetor = [10,20,30,40,50];

for(let indice in vetor){
    console.log(indice, vetor[indice]);
}

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let linha of matriz){
    for (let dado of linha){
        console.log(dado);
    }
}

let vetor = [10,20,30,40,50];
let novo_elemento = 60;

vetor.push(novo_elemento);

let vetor = [10,20,30,40,50];
vetor.pop();

let vetor = [10,20,30,40,50];
let novo_elemento = 0;

vetor.unshift(novo_elemento);


let vetor = [10,20,30,40,50];
vetor.shift();


// Definindo a função
function geradorNumerico(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}

// Chamando a função
geradorNumerico();

// Definindo a função
function geradorNumerico(comeco, fim){
    for(let i = comeco; i <= fim; i++){
        console.log(i);
    }
}

// Chamando a função
geradorNumerico(10,20);

function soma(a,b){
    return a+b;
}

const resultado = soma(2,3);



// Usando function
function soma1(a,b) { return a+b; }
// Atribuindo uma função anônima em constantes
const soma2 = function(a,b){ return a+b; };
// Atribuindo uma função de "flecha" em constantes
const soma3 = (a,b) => a+b;


const hello1 = () => "Hello World!";
const hello2 = (name) => "Hello " + name;
const hello3 = (name) => {return "Hello " + name;};


const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a,b);

const resultado1  = aplicarOperacao(1,2,somar);
const resultado2 = aplicarOperacao(1,2,subtrair); 