alert('Welcome to the secret number');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let num;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (num != numeroSecreto) {
    num = prompt(`Chosse a number betweeb 1 and ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (num == numeroSecreto) {
        break;
    } else {
        if (num > numeroSecreto) {
            alert(`The secret number is less than ${num}`);
        } else {
            alert(`The number is greater than${num}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'try' : 'try';
alert(`You discovered the secret number ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
