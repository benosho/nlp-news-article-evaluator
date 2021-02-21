import 'regenerator-runtime/runtime'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/results.scss'
import './styles/footer.scss'

import { handleSubmit } from './js/formHandler.js'
import { getSentiment } from './js/sentimentChecker.js'
import { updateUI } from './js/uiUpdater.js'
import { sum } from './js/sum.js'

export {
    handleSubmit,
    getSentiment,
    updateUI,
    sum
}