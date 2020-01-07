const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { NewBatch } = require('../models/newbatch');

router.get('/', (req, res) => {
    NewBatch.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("Error in fetching NewBatch Data" + JSON.stringify(err, undefined, 2));
        }
    });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given ID: ${req.params.id}`);

    NewBatch.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('error in retirieving id' + JSON.stringify(err, undefined, 2));

        }
    });
});

router.post('/', (req, res) => {
    var batch = new NewBatch({
        course_name: req.body.course_name,
        batch_no: req.body.batch_no,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        notes: req.body.notes,
    });
    batch.save((err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log("Erorr in adding Batch" + JSON.stringify(err, undefined, 2));

        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO record with given ID: : ${req.params.id}`);

    var batch =
    {
        course_name: req.body.course_name,
        batch_no: req.body.batch_no,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        notes: req.body.notes,
    };

    NewBatch.findByIdAndUpdate(req.params.id, { $set: batch }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log(`error in bacth update : ` + JSON.stringify(err, undefined, 2));
        }
    });
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO record with given ID: : ${req.params.id}`);

    NewBatch.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log("error in batch delete:" + JSON.stringify(err, undefined, 2));
        }
    });
});


module.exports = router;
