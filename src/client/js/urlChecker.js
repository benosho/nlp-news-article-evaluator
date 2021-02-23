const checkURL = URL => {
    const validURL = /^(https?|ftp):\/\/[^" ]+$/.test(URL)
    return validURL
}

export { checkURL }