let victories = 90
let defeats = 42
let balance // Calcula o saldo de ranqueadas

function calculateBalance() {
    balance = victories - defeats
}

calculateBalance();

let level

if (victories <= 10) {
    level = "Ferro";
} else if (victories > 10 && victories <= 20) {
    level = "Bronze";
} else if (victories > 20 && victories <= 50) {
    level = "Prata";
} else if (victories > 50 && victories <= 80) {
    level = "Ouro";
} else if (victories > 80 && victories <= 90) {
    level = "Diamante";
} else if (victories > 90 && victories <= 100) {
    level = "Lendário";
} else if (victories > 100) {
    level = "Imortal";
}

console.log("O Herói tem saldo de " + balance + " e está no nível " + level + ".")
