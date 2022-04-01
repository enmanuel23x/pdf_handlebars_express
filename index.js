const express = require('express');
const app = express();

const pdfRouter = require('./src/routers/pdfRouter')

app.use('/pdf', pdfRouter)
app.listen(2000, () => console.log('Listening to port 2000'))