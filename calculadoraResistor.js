function calculadoraResistor(){
let faixas = parseInt(prompt("Digite a quantidade de faixas(4 ou 5): "));
let cores = [];


for(let i = 0;i < faixas;i++){
    let cor = parseInt(prompt("Cor da faixa" +(i + 1) + "faixa:\n0-Preto, 1-Marrom, 2-Vermelho, 3-Laranja, 4-Amarelo, 5-Verde, 6-Azul, 7-Violeta, 8-Cinza, 9-Branco, 10-Ouro, 11-Prata"));
    cores.push(cor);
}




let multiplicadores = [1, 10, 100, 1000 , 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01];
let tolerancias = {1: "1%", 2: "2%", 5: "0.5%", 6: "0.25%", 7: "0.1%", 8: "0.05%", 10: "5%", 11: "10%"}

let valorbase, ohm, mult, tol;
if(faixas == 4){
    valorbase = (cores[0] * 10) + cores[1];
    mult = multiplicadores[cores[2]];
    tol = tolerancias[cores[3]] || "20%";
}else{
    valorbase = (cores[0] * 100) + (cores[1]*10) + cores[2];
    mult = multiplicadores[cores[3]];
    tol = tolerancias[cores[4]] || "20%";
}
    ohm = valorbase * mult;

    console.log("----------RESULTADO------------\nResistência: ", ohm, " Ohms");
    console.log("Tolerância: ", tol);
    
}