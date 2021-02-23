import { formatScore } from '../src/client/js/scoreFormatter'

const scoreTags = [
    'P+',
    'P',
    'NEU',
    'N',
    'N+',
    'NONE'
]

const scoreAliases = [
    'STRONG POSITIVE (P+)',
    'POSITIVE (P)',
    'NEUTRAL (NEU)',
    'NEGATIVE (N)',
    'STRONG NEGATIVE (N+)',
    'WITHOUT SENTIMENT (NONE)'
]

describe('testing the score formatting functionality', () => {
    test('score tag P+ outputs as STRONG POSITIVE (P+)', () => {
        expect(formatScore(scoreTags[0])).toBe(scoreAliases[0])
    })
    test('score tag P outputs as POSITIVE (P)', () => {
        expect(formatScore(scoreTags[1])).toBe(scoreAliases[1])
    })
    test('score tag NEU outputs as NEUTRAL (NEU)', () => {
        expect(formatScore(scoreTags[2])).toBe(scoreAliases[2])
    })
    test('score tag N outputs as NEGATIVE (N)', () => {
        expect(formatScore(scoreTags[3])).toBe(scoreAliases[3])
    })
    test('score tag N+ outputs as STRONG NEGATIVE (N+)', () => {
        expect(formatScore(scoreTags[4])).toBe(scoreAliases[4])
    })
    test('score tag NONE outputs as WITHOUT SENTIMENT (NONE)', () => {
        expect(formatScore(scoreTags[5])).toBe(scoreAliases[5])
    })
})