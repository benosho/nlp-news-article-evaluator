import { checkURL } from '../src/client/js/urlChecker'

const arrURL = [
    'https://jamesclear.com/saying-no',
    'http://www.gnu.org/',
    'httpx://guardian.ng/',
    'www.udacity.com',
    'ftp://156.32.143.254/pub/readme.txt'
]

describe('testing the url checker functionality', () => {
    test('arrURL[0] is a valid URL', () => {
        expect(checkURL(arrURL[0])).toBeTruthy()
    })
    test('arrURL[1] is a valid URL', () => {
        expect(checkURL(arrURL[1])).toBeTruthy()
    })
    test('arrURL[2] is an invalid URL', () => {
        expect(checkURL(arrURL[2])).toBeFalsy()
    })
    test('arrURL[3] is an invalid URL', () => {
        expect(checkURL(arrURL[3])).toBeFalsy()
    })
    test('arrURL[4] is a valid URL', () => {
        expect(checkURL(arrURL[4])).toBeTruthy()
    })
})