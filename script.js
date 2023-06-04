


const convertButton = document.querySelector(".convert-button") //mapeia o botão para poder utilizá-lo
const currencySelect = document.querySelector(".currency-select")






function convertValues() {// função que converte real em dólar
    const inputCurrencyValue = document.querySelector(".input-curreny").value


    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value")// valor convertido em dólar




    const dolarToday = 5.2 //dólar de hoje fictício para a aula
    const euroToday = 6.2



    // const convertedValue = inputCurrencyValue / dolarToday //conversão de real para dólar

// currencyValueConverted.innerHTML = convertedValue  //troca valor  dólar da página

    if( currencySelect.value == "dolar" ){ //Se o select estiver selecionado com o valor dolar, então executa o código dentro o if

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { //troca o valor do dólar da página convertido com formatação
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


if(currencySelect.value == "euro"){//Se o select estiver selecionado com o valor euro, então executa o código dentro o if


    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { //troca o valor do dólar da página convertido com formatação
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

}



/*/ currencyValueToConvert.innerHTML = inputCurrencyValue //troca valor do real da página bruto e sem formatação R$, . etc*/

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {//troca o valor do real da página com formatação
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
   



   
}








convertButton.addEventListener("click", convertValues)


