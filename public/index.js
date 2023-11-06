const apiKey = '92b9cff50c9745fc9fc4212793f6ac5a'
const baseCurrencySelect = document.querySelector('#baseCurrency')
const baseCurrencyInput = document.querySelector('#baseInput')
const targetCurrencySelect = document.querySelector('#targetCurrency')
const targetCurrencyInput = document.querySelector('#targetInput')
const baseCurrency = baseCurrencySelect.value
const targetCurrency = targetCurrencySelect.value
// console.log(baseValue)

// Define The Convert Form
const convertForm = document.querySelector('form#convert-form')

// What Happens after the form submits
convertForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = event.target
    const baseCurrency = baseCurrencySelect.value
    const targetCurrency = targetCurrencySelect.value
    const baseAmount = baseCurrencyInput.value 
    // console.log(baseAmount, targetCurrency, baseCurrency)

    const options = {method: 'GET'};

    fetch(`https://exchange-rates.abstractapi.com/v1/convert?api_key=${apiKey}&base=${baseCurrency}&target=${targetCurrency}&base_amount=${baseAmount}`, options)
    .then(response => response.json())
    .then(data =>{
        getExchange(data)
    })
    .catch(error => console.error('Error Occured!:', error))

})
// console.log(form)

// Function for Rendering default currency converter values 
function getExchange(data){
    // console.log(data)
    const converted = (data.converted_amount).toFixed(2)
    // const target = targetCurrencySelect.value 
    // const exchange = (data.exchange_rates[`${target}`]).toFixed(2)
    targetCurrencyInput.value = converted

    function clearForm(){
        convertForm.reset()
    }

    setTimeout(clearForm, 5000)

    // console.log(converted)
    
}

// initializing function
// function initialize(){
    // baseCurrencySelect.selectedIndex = 0;
    // targetCurrencySelect.selectedIndex = 3;


// }

// Define Feedback Form 
const feedbackForm = document.querySelector('#feedback-form')
// console.log(feedbackForm) 

// Event Listener For the Feedback Form
feedbackForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const api_url = 'https://my-json-server.typicode.com/coderbenny/phase1-project/users'
    
    const name = feedbackForm.querySelector('#fname').value
    const email = feedbackForm.querySelector('#email').value
    const feedback = feedbackForm.querySelector('#feedback').value
    // console.log(`Name: ${name}, Email: ${email}, Feedback: ${feedback}`)

    // Assign the name, email and feedback variables to an object
    const userFeedback = {
        name: name,
        email: email,
        feedback: feedback,
    }

    fetch(api_url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userFeedback)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        feedbackForm.reset()
        displaySuccessMessage()
    })
    .catch(error => console.error('Error:', error))
}) 

// Function for Displaying Success Message
function displaySuccessMessage(){
    const successMessage = document.createElement('div')
    successMessage.innerHTML = '<h2>Feedback Submitted!</h2>'

    successMessage.className = 'success-message'
    feedbackForm.appendChild(successMessage)

    setTimeout(()=>{
        feedbackForm.removeChild(successMessage)
    }, 3000)
}

// Page Top Navigation
const navLinks = document.querySelector('.nav').children
// console.log(navLinks)

for (const navLink of navLinks){
    navLink.addEventListener('click', (event)=>{
        const sectionId = navLink.id
        // console.log(sectionId)
        
        if (sectionId){
            document.querySelector(`${sectionId}`).scrollIntoView({behavior: 'smooth'})
        }
    })
}

// Reference Select Elements
const selectElements = document.querySelectorAll('select')

// console.log(selectElements)

function addCurrencyOptions(){
    selectElements.forEach(select =>{
        select.innerHTML = `
        <option value="USD">US Dollar</option>
        <option value="EUR">Euro</option>
        <option value="ARS">Argentine Peso</option>
        <option value="AUD">Australian Dollar</option>
        <option value="BGN">Bulgarian Lev</option>
        <option value="BCH">Bitcoin Cash</option>
        <option value="BNB">Binance Coin</option>
        <option value="BRL">Brazilian Real</option>
        <option value="BTC">Bitcoin</option>
        <option value="CAD">Canadian Dollar</option>
        <option value="CHF">Swiss Franc</option>
        <option value="CNY">Chinese Yuan</option>
        <option value="CZK">Czech Republic Koruna</option>
        <option value="DKK">Danish Krone</option>
        <option value="DOGE">Dogecoin</option>
        <option value="DZD">Algerian Dinar</option>
        <option value="ETH">Ethereum</option>
        <option value="GBP">British Pound Sterling</option>
        <option value="HKD">Hong Kong Dollar</option>
        <option value="HRK">Kroatian Kuna</option>
        <option value="HUF">Hungarian Forint</option>
        <option value="IDR">Indonesian Rupian</option>
        <option value="ILS">Israeli New Sheqel</option>
        <option value="INR">Indian Rupee</option>
        <option value="ISK">Icelandic Krona</option>
        <option value="JPY">Japanese Yen</option>
        <option value="KRW">South korean Won</option>
        <option value="LTC">Litecoin</option>
        <option value="MAD">Moroccan Dirham</option>
        <option value="MXN">Mexican Peso</option>
        <option value="MYR">Malaysian Ringgit</option>
        <option value="NOK">Norwegian Krone</option>
        <option value="NZD">New Zealand Dollar</option>
        <option value="PHP">Philippine Peso</option>
        <option value="PLN">Polish Zloty</option>
        <option value="RON">Romanian Leu</option>
        <option value="RUB">Russian Ruble</option>
        <option value="SEK">Swedish Krona</option>
        <option value="SGD">Singapore Dollar</option>
        <option value="THB">Thai Baht</option>
        <option value="TRY">Turkish Lira</option>
        <option value="TWD">New Taiwan Dollar</option>
        <option value="XRP">Ripple</option>
        <option value="ZAR">South African Rand</option> 
        `
    })
}

// EventListener for Currency History Form
const historyForm = document.querySelector('#history-form')

historyForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const refDate = historyForm.querySelector('#exchange-date').value
    const refCurrency  = historyForm.querySelector('#lookup-currency').value
    const historyHeading = document.querySelector('.history-head').textContent
    // console.log(historyHeading)

    //Displaying History results in the History Div
    // function displayHistory(data){
    //     console.log(data)
    //     const base = document.createElement('h3') 
    //     const baseID = data.base
    //     base.textContent = baseID    
    //     historyHeading.appendChild(base)
    // }

    fetch(`https://exchange-rates.abstractapi.com/v1/historical/?api_key=${apiKey}&base=${refCurrency}&date=${refDate}`)
        .then(response => response.json())
        .then(data => {
            displayHistory(data)
        })
        .catch(error => console.error('An error occured:', error))
    
    historyForm.reset()
})

// Function for Time/Date
function displayTime(){
    const now = new Date()
    const timeElement = document.querySelector('.dateTime')

    // Formatting the Hts, Mins & Seconds
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    // const seconds = String(now.getSeconds()).padStart(2, '0')
    const Day = String(now.getDay())
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDay = now.toLocaleDateString('en-US', options);

    timeElement.querySelector('h4').textContent = ` ${formattedDay} ${hours}:${minutes}`
    
}

setInterval(displayTime, 1000)

document.addEventListener('DOMContentLoaded', ()=> {
    // initialize()

    addCurrencyOptions();
    displayTime()

})
