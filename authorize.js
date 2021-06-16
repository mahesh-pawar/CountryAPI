const authorize = (req, res, next) => {
    const { api_key } = req.query
    if (api_key === 'CountryAPI') {
        next()
    } else {
        res.status(401).send({ error: true, message: 'Unauthorized' })
    }
}

module.exports = authorize