const apiKey = '92b9cff50c9745fc9fc4212793f6ac5a'
const baseCurrencySelect = document.querySelector('#baseCurrency')
const targetCurrencySelect = document.querySelector('#targetCurrency')
const targetCurrencyInput = document.querySelector('target')


// Function for Loading default currency converter values 
function getExchange(data){
    const exchange = data.exchange_rates
    console.log(exchange[0])
    
}

// initializing function
function initialize(){
    baseCurrencySelect.selectedIndex = 0;
    targetCurrencySelect.selectedIndex = 1;
    const baseCurrency = baseCurrencySelect.value
    const targetCurrency = targetCurrencySelect.value


    fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=${apiKey}&base=${baseCurrency}&target=${targetCurrency}`)
    .then(response => response.json())
    .then(data => {
        getExchange(data)
    })
    .catch(error => {
        console.error('Error occured:', error)
    })
}



document.addEventListener('DOMContentLoaded', ()=> {
    initialize()
})
