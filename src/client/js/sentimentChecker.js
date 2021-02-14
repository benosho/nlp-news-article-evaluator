async function getSentiment(url='', keyVal='', text='') {
    console.log("::: Running getSentiment :::", url, key, text);
    // GET request to external sentiment analysis API
    const apiResponse = await fetch(url + '?key=' + keyVal + '&of=json' + '&txt=' + text + '&lang=en');
    try {
        const sentimentResult = apiResponse.json();
        return sentimentResult
    }
    catch {
        console.log('ERR:', err.message);
    }
}

export { getSentiment }
