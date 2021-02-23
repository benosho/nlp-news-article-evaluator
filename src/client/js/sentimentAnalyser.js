/**
 * Two functions for calling the MeaningCloud sentiment analysis API are specified below. Use either.
 */

import "regenerator-runtime/runtime.js";


// POST request to sentiment analysis API using standard HTTP without async/await
// See developer tools @https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools/2.1#snippets-nodejs

const getSentimentByHTTP = (keyVal = '', model = '', langISO = '', urlString = '') => {
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

// POST request to sentiment analysis API using Fetch with async/await
const getSentimentByFetch = async (keyVal = '', model = '', langISO = '', urlString = '') => {
    const options = {
        method: 'POST',
        headers: {},
    }
    const apiResponse = await fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + keyVal + '&of=json' + '&lang=' + langISO + '&url=' + urlString + '&model=' + model, options)
    try {
        const data = await apiResponse.json();
        Client.updateUI(data.status.code, data.score_tag, data.agreement, data.subjectivity, data.irony, data.confidence, model, langISO, urlString)
    }
    catch (err) {
        console.log('error:', err.message);
    }
}

export {
    getSentimentByHTTP,
    getSentimentByFetch
}

