const express = require('express')
const path = require('path')
const app = express()
const indexRouter = require('./routes/index')

app.use('/', indexRouter);
app.use(express.static('client'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/layout'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/')
})
