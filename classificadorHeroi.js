const nomeHeroi = "Aragorn";  // Altere o nome do herói aqui
let experiencia = 15000;  // Defina a quantidade de XP aqui


function classificarHeroi(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}


const nivel = classificarHeroi(experiencia);


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);