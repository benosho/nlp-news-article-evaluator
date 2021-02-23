const handleSubmit = (event) => {
    event.preventDefault()

    const model = 'general'
    const langISO = 'en'

    // Analyse text
    const textInput = document.getElementById('text-input').value
    if (textInput && Client.checkURL(textInput)) { // check for valid url
        Client.getSentimentByFetch(process.env.API_KEY, model, langISO, textInput)
    }
    else {
        alert('Please enter a valid URL')
    }
}

export { handleSubmit }

