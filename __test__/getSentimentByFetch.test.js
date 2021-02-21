import { getSentimentByFetch } from '../src/client/js/sentimentAnalyser'
import 'regenerator-runtime/runtime'


describe('testing the API request functionality', () => {
    test('returns false if no data is returned by the API', async () => {
        const args = ['123', 'general', 'en', 'https://jamesclear.com/saying-no']
        global.fetch = jest.fn(() => {
            Promise.resolve();
        })
        const response = await getSentimentByFetch(...args)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(response).toBe(false)
    })
})