async function getSentiment(keyVal = '', model = '', langISO = '', urlString = '') {
    // GET request to external sentiment analysis API
    const https = require('follow-redirects').https
    const options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': '/sentiment-2.1?key=' + keyVal + '&of=json' + '&lang=' + langISO + '&url=' + urlString + '&model=' + model,
        'headers': {},
        'maxRedirects': 20
    }

    const req = https.request(options, res => {
        const chunks = []
        res.on('data', (chunk) => chunks.push(chunk))
        res.on("end", (chunk) => {
            let body = Buffer.concat(chunks)
            body = JSON.parse(body.toString())
            Client.updateUI(body.status.code, body.score_tag, body.agreement, body.subjectivity, body.irony, body.confidence, model, langISO, urlString)
        })
        res.on("error", error => console.error(error));
    })
    req.end()
}

export { getSentiment }