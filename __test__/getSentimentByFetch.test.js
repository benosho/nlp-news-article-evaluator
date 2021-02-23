import "regenerator-runtime/runtime.js";

import { getSentimentByFetch } from '../src/client/js/sentimentAnalyser'

describe('testing the API request functionality', () => {
    test('getSentimentByFetch() function exists', () => {
        expect(getSentimentByFetch).toBeDefined();
    })
})