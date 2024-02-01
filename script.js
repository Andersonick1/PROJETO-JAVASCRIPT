const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 4.95
    const euroToday = 5.36
    const rupiaToday = 0.060
    const libraToday = 6.28

    if (currencySelect.value == "dolar") {
        //Se o select estiver selecionado o valor de dolar, entre aqui

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        // Se o valor estiver selecioanado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    if (currencySelect.value == "rupia") {
        // Se o valor estiver selecioanado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue / rupiaToday)
    }

    if (currencySelect.value == "libra") {
        // Se o valor estiver selecioanado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / rupiaToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dóla americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }


    if (currencySelect.value == "rupia") {
        currencyName.innerHTML = "Rupia Indiana"
        currencyImage.src = "./assets/rupia.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "LIBRA"
        currencyImage.src = "./assets/libra 1.png"
    }


    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)