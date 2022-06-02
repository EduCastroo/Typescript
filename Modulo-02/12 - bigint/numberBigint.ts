//EXEMPLO NUMBER
let num1: number = 28.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0o457;
let num5: number = 0b110001;

console.log('Número ponto flutuante: ', typeof(num1));
console.log('Número hexadecimal: ', num2);
console.log('Número Octal: ',num3);
console.log('Número Octal: ',num4);
console.log('Número Binário: ',num5);


//EXEMPLO BIGINT

let big1: bigint = 91546546544656541321321n;
let big2: bigint = 0b1000000000000000000011n;
let big3: bigint = 0x1546546546541321324441n;
let big4: bigint = 0o546546546541321327771n;

console.log(big1);
console.log(big2);
console.log(big3);
console.log(big4);
