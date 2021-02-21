//const sum  =  require('./src/client/js/sum');
import {sum} from '/src/client/js/sum.js'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})