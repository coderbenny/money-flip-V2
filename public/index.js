const apiKey = '92b9cff50c9745fc9fc4212793f6ac5a'
const baseCurrencySelect = document.querySelector('#baseCurrency')
const baseCurrencyInput = document.querySelector('#baseInput')
const targetCurrencySelect = document.querySelector('#targetCurrency')
const targetCurrencyInput = document.querySelector('#targetInput')
const baseCurrency = baseCurrencySelect.value
const targetCurrency = targetCurrencySelect.value

// console.log(baseValue)

// Define The Form
const form = document.querySelector('form#convert-form')


// What Happens after the form submits
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = event.target
    let baseCurrency = baseCurrencySelect.value
    let targetCurrency = targetCurrencySelect.value
    const baseAmount = baseCurrencyInput.value
    // console.log(baseCurrency)

    fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=${apiKey}&base=${baseCurrency}&target=${targetCurrency}`)
    .then(response => response.json())
    .then(data =>{
        getExchange(data)
    })
    .catch(error => console.error('Error Occured!:', error))

})
// console.log(form)

// Function for Rendering default currency converter values 
function getExchange(data){
    let target = targetCurrencySelect.value 
    const exchange = (data.exchange_rates[`${target}`]).toFixed(2)
    targetCurrencyInput.value = exchange
    // console.log(exchange)
    
}

// initializing function
function initialize(){
    baseCurrencySelect.selectedIndex = 0;
    targetCurrencySelect.selectedIndex = 1;
    


    // fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=${apiKey}&base=${baseCurrency}&target=${targetCurrency}`)
    // .then(response => response.json())
    // .then(data => {
    //     getExchange(data)
    // })
    // .catch(error => {
    //     console.error('Error occured:', error)
    // })
}



document.addEventListener('DOMContentLoaded', ()=> {
    initialize()
})
