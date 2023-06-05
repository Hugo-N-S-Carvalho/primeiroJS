


const convertButton = document.querySelector(".convert-button") //mapeia o botão para poder utilizá-lo
const currencySelect = document.querySelector(".currency-select")






function convertValues() {// função que converte real em dólar e euro 
    const inputCurrencyValue = document.querySelector(".input-curreny").value


    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value")// valor convertido em dólar




    const dolarToday = 5.2 //dólar de hoje fictício para a aula
    const euroToday = 6.2
const libraToday = 6.13
const btcToday = 126979.78


    // const convertedValue = inputCurrencyValue / dolarToday //conversão de real para dólar

    // currencyValueConverted.innerHTML = convertedValue  //troca valor  dólar da página

    if (currencySelect.value == "dolar") { //Se o select estiver selecionado com o valor dolar, então executa o código dentro o if

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { //troca o valor do dólar da página convertido com formatação
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") {//Se o select estiver selecionado com o valor euro, então executa o código dentro o if


        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { //troca o valor do dólar da página convertido com formatação
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }



    if (currencySelect.value == "libra") { //Se o select estiver selecionado com o valor dolar, então executa o código dentro o if

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { //troca o valor do dólar da página convertido com formatação
            style: "currency",
            currency: "GBP"
            
        }).format(inputCurrencyValue / libraToday)
    }


    if (currencySelect.value == "btc") {//Se o select estiver selecionado com o valor euro, então executa o código dentro o if


        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { //troca o valor do dólar da página convertido com formatação
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
        maximumFractionDigits: 8
        }).format(inputCurrencyValue / btcToday)

    }


    /*/ currencyValueToConvert.innerHTML = inputCurrencyValue //troca valor do real da página bruto e sem formatação R$, . etc*/

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {//troca o valor do real da página com formatação
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)







}




function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")




    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"


    }





    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"



    }



    if (currencySelect.value == "libra") {

        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra 1.png"


    }





    if (currencySelect.value == "btc") {

        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"



    }


    convertValues()
}






currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


