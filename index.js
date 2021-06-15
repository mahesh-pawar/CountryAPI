const express = require('express')
const app = express()

var countries = require('./countries.js')

app.get('/api/v1/countries', (req, res) => {

    let country_data = false
    const { country_name } = req.query
    const { country_iso2_code } = req.query
    const { country_iso3_code } = req.query

    if (country_name) {
        country_data = countries.find(country => country.name === country_name);
        if (!country_data) {
            return res.json({ success: true, error: 'Country not found' })
        }

        return res.json({ success: true, data: country_data })
    }

    if (country_iso2_code) {
        country_data = countries.find(country => country.alpha_2_code === country_iso2_code);
        if (!country_data) {
            return res.json({ success: true, error: 'Country not found' })
        }

        return res.json({ success: true, data: country_data })
    }

    if (country_iso3_code) {
        country_data = countries.find(country => country.alpha_3_code === country_iso3_code);
        if (!country_data) {
            return res.json({ success: true, error: 'Country not found' })
        }

        return res.json({ success: true, data: country_data })
    }

    res.json({ success: true, data: countries })
})

app.all('*', (req, res) => {
    res.statusCode = 404
    res.send({ 'error': 'Resource not found' })
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('server is listening on port 3000')
    }
})