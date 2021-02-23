import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/results.scss'
import './styles/footer.scss'

import { handleSubmit } from './js/formHandler.js'
import { getSentimentByFetch } from './js/sentimentAnalyser.js'
import { updateUI } from './js/uiUpdater.js'
import { checkURL } from './js/urlChecker.js'
import { formatScore } from './js/scoreFormatter.js'

export {
    handleSubmit,
    getSentimentByFetch,
    updateUI,
    checkURL,
    formatScore
}