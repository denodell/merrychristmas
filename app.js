var compression = require('compression'),
    path = require('path'),
    express = require('express'),
    app = express();

app.use('/', express.static(path.join(__dirname, 'src/')));

app.use(compression());
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
