let escolha = parseInt(prompt("-------OPÇÕES--------\nDigite qual operação deseja fazer:\n1-Calculadora de Consumo\n2-Calculadora de Múltiplos e Submúltiplos\n3-Calculadora de Resistores\n4-Calculadora de Ohms\n5-Calculadora de Resistores em Série e Paralelo\n6-Calculadora de Potência "))

switch(escolha){

case 1:
    calculadoraDeConsumo()
    break

case 2:
    calculadoraMultSub()
    break

case 3:
    calculadoraResistor()
    break

case 4:
    calculadoraDeOhms()
    break

case 5:
    calculadoraResistoresParaleloSerie()
    break

case 6:
    calculadoraDePotencia()
    break
}