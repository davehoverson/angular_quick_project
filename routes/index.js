/**
 * Created by davidhoverson on 10/13/15.
 */
var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../server/public/views/index.html'));
});

module.exports = router;