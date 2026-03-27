function calculadoraDeConsumo(){

    let aparelho = prompt("Digite o nome do eletrodómestico: ");
    let horas = parseInt(prompt("Digite quantas horas o aparelho foi usado: "));
    let escolha = parseInt(prompt("-------OPÇÕES-------\n1-Watts\n2-Kwh:"));
    let potencia =parseFloat(prompt("Digite a potência: "));
    let taxa = parseFloat(prompt("Digite a taxa por Kwh: "));

    let totalPordia, custoPordia, custoMensal;

    if(escolha == 1){
        totalPordia = (potencia * horas) / 1000;
        custoPordia = totalPordia * taxa;
    }else if(escolha == 2){
        totalPordia = potencia * horas;
        custoPordia = totalPordia * taxa;
    }
    custoMensal = totalPordia * 30;

    console.log("-------RESULTADO-----\nEletrodómestico: ", aparelho,"\nKwh diário: ", totalPordia,"Kwh","\Kwh Mensal: $", custoMensal,"Kwh", "\nCusto diário: $", custoPordia );
}