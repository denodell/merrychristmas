var compression = require('compression'),
    path = require('path'),
    fs = require('fs'),
    express = require('express'),
    app = express()
    port = process.env.PORT;

app.use('/images', express.static(path.join(__dirname, 'src/images')));
app.get('/', function (req, res) {
  res.send(fs.readFileSync(path.join(__dirname, '/src/index.html'), 'utf-8'))
})

app.use(compression());
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
