// Score tag lookup table
const scoreTagLookup = {
    'P+': 'Strong Positive',
    'P': 'Positive',
    'NEU': 'Neutral',
    'N': 'Negative',
    'N+': 'Strong Negative',
    'NONE': 'Without Sentiment'
}

// Convert score tag response from API into more meaningful output
const formatScore = scoreTag => {
    const entries = Object.entries(scoreTagLookup)
    for (const [tag, term] of entries) {
        if (tag === scoreTag) {
            let score = `${term} (${tag})`
            score = score.toUpperCase()
            return score
        }
    }
}

export { formatScore }