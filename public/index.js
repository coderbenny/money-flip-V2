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

    // fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=${apiKey}&base=${baseCurrency}&target=${targetCurrency}`)
    // .then(response => response.json())
    // .then(data =>{
    //     getExchange(data)
    // })
    // .catch(error => console.error('Error Occured!:', error))

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

// function submitReview(event){
//     let formData = event.target
//     console.log(formData)
// }


document.addEventListener('DOMContentLoaded', ()=> {
    initialize()
})
