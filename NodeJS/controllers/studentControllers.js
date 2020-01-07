const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const ObjectID = require('mongodb').ObjectID;

var { Student } = require('../models/student');

router.get('/', (req, res) => {
    Student.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in retrieving EMP' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO record with given ID: : ${req.params.id}`);

    Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('error in retirieving id' + JSON.stringify(err, undefined, 2));

        }
    });
});


router.post('/', (req, res) => {
    var stud = new Student({
        //personal_details
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_id: req.body.email_id,
        contact_no: req.body.contact_no,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
        // employment_details
        employment_status: req.body.employment_status,
        company_name: req.body.company_name,
        years_of_experiance: req.body.years_of_experiance,
        key_skills: req.body.key_skills,
        // academic_details
        highest_qualification: req.body.highest_qualification,
        disipline: req.body.disipline,
        college_of_study: req.body.college_of_study,
        degree_completion_year: req.body.degree_completion_year,
        percentage: req.body.percentage,
        // payment_details
        schollarship: req.body.schollarship,
        total_fee: req.body.total_fee,
        first_installment: req.body.first_installment,
        remaining_fee: req.body.remaining_fee,
        mode_of_payment: req.body.mode_of_payment,
        cheque_no: req.body.cheque_no,
        transaction_id: req.body.transaction_id,
        course: req.body.course,
        batch_no: req.body.batch_no,


    });
    stud.save((err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log("Erorr in Employee save" + JSON.stringify(err, undefined, 2));

        }
    });
});


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO record with given ID: : ${req.params.id}`);


    var stud =
    {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_id: req.body.email_id,
        contact_no: req.body.contact_no,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
        // employment_details
        employment_status: req.body.employment_status,
        company_name: req.body.company_name,
        years_of_experiance: req.body.years_of_experiance,
        key_skills: req.body.key_skills,
        // academic_details
        highest_qualification: req.body.highest_qualification,
        disipline: req.body.disipline,
        college_of_study: req.body.college_of_study,
        degree_completion_year: req.body.degree_completion_year,
        percentage: req.body.percentage,
        // payment_details
        schollarship: req.body.schollarship,
        total_fee: req.body.total_fee,
        first_installment: req.body.first_installment,
        remaining_fee: req.body.remaining_fee,
        mode_of_payment: req.body.mode_of_payment,
        cheque_no: req.body.cheque_no,
        transaction_id: req.body.transaction_id,
        course: req.body.course,
        batch_no: req.body.batch_no,



    };
    Student.findByIdAndUpdate(req.params.id, { $set: stud }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log(`error in employee update : ` + JSON.stringify(err, undefined, 2));
        }
    });
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO record with given ID: : ${req.params.id}`);

    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log("error in employee delete:" + JSON.stringify(err, undefined, 2));
        }
    });
});



module.exports = router;