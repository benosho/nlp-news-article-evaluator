const updateUI = (status, scoreTag, agreement, subjectivity, irony, confidence, model, langISO, urlString) => {
    if (parseInt(status, 10) === 0) {

        document.getElementById('results').innerHTML =
            `<p>URL: <span class="content-url"><a href="${urlString}" target="_blank">${urlString}</a></span></p>
        <p>Sentiment: <span class="sentiment-score">${Client.formatScore(scoreTag)}</span></p>
        <p>Agreement: <span class="agreement">${agreement}</span></p>
        <p>Subjectivity: <span class="subjectivity">${subjectivity}</span></p>
        <p>Irony: <span class="irony">${irony}</span></p>
        <p class='analysis-meta'>About Analysis</p>
        <p>API: <a href="https://www.meaningcloud.com/developer/sentiment-analysis" target="_blank">MeaningCloud</a> Sentimental Analysis API v2.1</p>
        <p>Sentiment Model: <span class="model">${model}</span></p>
        <p>Language (<a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1</a> code): <span class="lang">${langISO}</span></p>
        <p>Confidence of Analysis: <span class="confidence">${confidence}/100</span></p>`
    }
    else {
        document.getElementById('results').innerHTML = `<p class="error-notify">Uh oh. Something went wrong. <a href="https://www.meaningcloud.com/developer/documentation/error-codes" target="_blank">Error ${status}</a></p>`
    }
}

export { updateUI }