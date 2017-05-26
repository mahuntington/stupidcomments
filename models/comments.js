var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    body:String,
    author:String
});

var Comments = mongoose.model('Comment', commentSchema);

module.exports = Comments;
