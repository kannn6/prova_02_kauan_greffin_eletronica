function calculadoraMultSub(){

    let unidade = prompt("Digite a unidade do valor que deseja converter(A,V,W,OHM):")
    let medidaAtual = parseInt(prompt("Digite qual a medida atual(1-G, 2-MG, 3-K, 4-BS, 5-ML, 6-MC, 7-NN, 8-PC"))
    let converterPara = parseInt(prompt("Digite para qual medida deseja converter(1-G, 2-MG, 3-K, 4-BS, 5-ML, 6-MC, 7-NN, 8-PC"))
    let valor = parseFloat(prompt("Digite o valor desejado: "))

    let escalas = [10**9, 10**6, 10**3, 1, 10**-3, 10**-6, 10**-9, 10**-12]
    let nomes = ["G", "MG", "K", "BS", "ML", "MC", "NN", "PC"]

    let resultado = valor*(escalas[medidaAtual - 1]/escalas[converterPara - 1])
    console.log("----------RESULTADO------------\nO resultado é: ", resultado)
}