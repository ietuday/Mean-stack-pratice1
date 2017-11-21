var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/blocks', function(request, response) {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
});

app.listen(3000);