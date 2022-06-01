



//===> Variáveis [Type Annotations]
let nome: string = 'Eduardo Castro';
console.log(nome);


//===> Arrays [Type Annotations]
let animais: string[] = ['cachorro', 'gato', 'urso'];
console.log(animais);

//===> Objeto [Type Annotations]
let carro: {
    nome: string;
    ano: number;
    preco: number;
}
carro = {nome:'Fusca', ano: 1979, preco: 20000 };
console.log(carro);

//===> Funções [Type Annotations]
function multiplicarNumeros(num1: number, num2: number){
    return num1*num2;
}
console.log(multiplicarNumeros(2,9));

function somaNumeros(num1: number, num2: number){
    return num1+num2;
}
console.log(somaNumeros(2,2));