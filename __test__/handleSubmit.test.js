import { handleSubmit } from '../src/client/js/formHandler'
import 'regenerator-runtime/runtime'

describe('Testing the submit functionality', () => {
    test('Testing the handleSubmit() function', () => {
        expect(handleSubmit).toBeDefined()
    })
})