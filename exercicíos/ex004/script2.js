const vetor = [1, 2, 3, 4];
const dobro = (item) => 2 * item;
const vetordobrado = vetor.map(dobro);

// Função que eleva ao quadrado
const aoQuadrado = (item, indice, vetor) => vetor[indice]*item;
   //É possível escrever a função diretamente dentro do map.
const vetor = [1,2,3,4,5,6];
const vetorTransformado = vetor.map((x)=>x+1);


const vetor = ["a","b","c"];
const toUpper = (str) => str.toUpperCase();
const maiusculas = vetor.map(toUpper);

const vetor = [1,2,3,4,5,6,7,8,9,10];
const pares = vetor.filter(x => x % 2 === 0);

const vetor = [10,4,5,6,2,7,3,8,9,1];
const vetor2 = vetor.filter(x => x < 8);

const vetor = [1,2,3,4,5,6];
const soma = vetor.reduce((estado, item) => estado + item);

const vetor = [1,2,3,4,5,6];
const soma = vetor.reduce((estado, item) => estado + item, 0);

let vetor = [
    { nome : 'nome1', nota1 : 5, nota2 : 4 },
    { nome : 'nome2', nota1 : 4, nota2 : 3 },
    { nome : 'nome3', nota1 : 7, nota2 : 8 },
    { nome : 'nome4', nota1 : 2, nota2 : 7 },
    { nome : 'nome5', nota1 : 9, nota2 : 9 },
  ];
  

  const estadoInicial = { 
    somaNota1 : 0, 
    somaNota2 : 0, 
    qtdNota1 : 0, 
    qtdNota2 : 0,
  };
  

  const result = vetor.reduce((estado, valor) => {
    return {
        somaNota1 : estado.somaNota1 + valor.nota1,
        somaNota2 : estado.somaNota2 + valor.nota2,
        qtdNota1 : estado.qtdNota1 + 1,
        qtdNota2 : estado.qtdNota2 + 1
    };
  }, estadoInicial);
  




  const pessoa1 = { nome : "Carlos", idade : 20 };

const agenda = {
    contatos : [
        {nome : 'contato1', telefone : 'telefone1', email : 'email1@teste.com'},
        {nome : 'contato2', telefone : 'telefone2', email : 'email2@teste.com'},
        {nome : 'contato3', telefone : 'telefone3', email : 'email3@teste.com'},
        {nome : 'contato4', telefone : 'telefone4', email : 'email4@teste.com'}
    ],
    adicionar : function(contato){ this.contatos.push(contato) }
}



class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}


const pessoa1 = new Pessoa('Carlos', 20);
console.log(pessoa1); 
//Veremos no console:
//Pessoa { nome: 'Carlos', idade: 20 }


const pessoa2 = new Pessoa('Marta', 26);
console.log(pessoa2); 
//Veremos no console:
//Pessoa { nome: 'Marta', idade: 26 }

class Quadrado{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado);

const quadrado2 = new Quadrado('teste', 'teste2');
console.log(quadrado2);


class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
        this.base = base;
        this.altura = altura;
    }
}

class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: undefined }
quadrado.cor = 'azul';
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: 'azul' }


class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: undefined }
console.log(quadrado.calcularArea());
//12



class Quadrado{
    constructor(base, altura){
      if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";
      this.base = base;
      this.altura = altura;
      this.cor = undefined;
    }
    calcularArea() {
      return this.base * this.altura;
    }
    duplicarParaDireita(){
      this.base = this.base * 2;
    }
    duplicarParaBaixo(){
      this.altura = this.altura * 2;
    }
    imprimir(){
      return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`;
    }
  }
  
  const quadrado = new Quadrado(3, 4);
  console.log(quadrado);
  //Quadrado { base: 3, altura: 4, cor: undefined }
  console.log(quadrado.calcularArea());
  //12
  
  quadrado.duplicarParaBaixo();
  console.log(quadrado);
  //Quadrado { base: 3, altura: 8, cor: undefined }
  
  quadrado.duplicarParaDireita();
  console.log(quadrado);
  //Quadrado { base: 6, altura: 8, cor: undefined }
  
  console.log(quadrado.imprimir());
  //<div style='width:6px;height:8px;background-color:blue'></div>