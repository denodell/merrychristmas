var compression = require('compression'),
    path = require('path'),
    fs = require('fs'),
    express = require('express'),
    app = express(),
		isProd = process.env.production && process.env.production === 'true',
    port = isProd ? process.env.PORT : 5005,
    html = fs.readFileSync(path.join(__dirname, '/src/index.html'), 'utf-8');

app.use('/images', express.static(path.join(__dirname, 'src/images')));
app.get('/', function (req, res) {
  const today = new Date()
  const day = today.getDate()
  const queryDate = req.query && req.query.date ? req.query.date : false
  const useQueryDate = queryDate && queryDate <= day
  const date = useQueryDate ? queryDate : day
  res.send(html.replace(/{date}/g, date))
})

app.use(compression());
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
