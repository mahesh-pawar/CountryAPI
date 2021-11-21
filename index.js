const express = require('express')
const app = express()
const authorize = require('./middlewares/authorize.js')
var countryRoutes = require('./routes/countries.js');

app.use(authorize);
app.use('/v1/countries',countryRoutes);

app.all('*', (req, res) => {
    res.status(404).send({ 'error': 'Resource not found' })
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('server is listening on port 3000')
    }
})