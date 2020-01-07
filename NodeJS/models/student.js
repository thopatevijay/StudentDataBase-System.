const mongoose = require('mongoose');

var Student = mongoose.model('Student',{
    //personal_details
    first_name: {type: String},
    last_name: {type: String},
    email_id: {type: String},
    contact_no: {type: Number},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    gender: {type: String},
    date_of_birth: {type: String},
    // employment_details
    employment_status: {type:String},
    company_name: {type: String},
    years_of_experiance: {type:String},
    key_skills: {type: String},
    // academic_details
    highest_qualification:{type:String},
    disipline: {type: String},
    college_of_study: {type: String},
    degree_completion_year: {type: Number},
    percentage: {type: Number},
    // payment_details
    schollarship: {type: String},
    total_fee: {type: Number},
    first_installment: {type: Number},
    remaining_fee: {type:Number},
    mode_of_payment:{type:String},
    cheque_no:{type:Number},
    transaction_id:{type:String},
    course:{type:String},
    batch_no:{type:Number},

});

module.exports = { Student };
