function handleSubmit(event) {
    event.preventDefault()

    const baseURL = 

    // check what text was put into the form field
    const textForAnalysis = document.getElementById('text-input').value
    if (textForAnalysis) {
getSentiment()
    }
    else {
        alert('Please enter some text')
    }
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
