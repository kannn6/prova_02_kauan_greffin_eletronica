function calculadoraResistoresParaleloSerie(){
    let resultado = 0;
    let conta = parseInt(prompt("Digite qual calculo deseja fazer(1-Em Série, 2-Em Paralelo):"));

    if(conta == 1){
        let qntdResistores = parseInt(prompt("Digite a quantidade de resistores: "));
        let resistores = [];
        let entrada = prompt("Digite o valor dos resistores separados por vírgular(ex:10,20,10): ");
        resistores = entrada.split(",").map(Number);

        for(let contador = 0;contador < resistores.length;contador++){
            resultado += resistores[contador];
        }
    }else{
        let qntdResistores = parseInt(prompt("Digite a quantidade de resistores: "));
        let resistores = [];
        let entrada = prompt("Digite o valor dos resistores separados por vírgular(ex:10,20,10): ");
        resistores = entrada.split(",").map(Number);

        for(let contador = 0;contador < resistores.length; contador++){
        resultado += (1 / resistores[contador]);
        }
        resultado = 1/resultado;
    }
    console.log("----------RESULTADO------------\nO resultado é: ", resultado);
}