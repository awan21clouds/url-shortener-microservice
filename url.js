'use strict';

var shortid = require('shortid');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Url = new Schema({
    original_url: {type: String, required: true},
    short_id: {type: String, required: true, default: shortid.generate}
});

module.exports = mongoose.model('Url', Url);
