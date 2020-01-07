const mongoose = require('mongoose');

var NewBatch = mongoose.model('NewBatch',{
    course_name:{type:String},
    batch_no:{type:String},
    start_date:{type:String},
    end_date:{type:String},
    notes:{type:String},
});

module.exports = { NewBatch };