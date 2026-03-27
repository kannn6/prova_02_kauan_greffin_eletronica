function calculadoraDePotencia(){


    let tensao = parseInt(prompt("Digite o valor da tensão: "))
    let corrente = parseInt(prompt("Digite o valor da corrente: "))
    let potencia = corrente * tensao

    console.log("---------RESULTADO---------\nO resultado da potência é de: ", potencia, "Watts")

}