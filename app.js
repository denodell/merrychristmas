var compression = require('compression'),
    path = require('path'),
    express = require('express'),
    app = express()
    port = process.env.PORT;

app.use('/', express.static(path.join(__dirname, 'src/')));

app.use(compression());
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
