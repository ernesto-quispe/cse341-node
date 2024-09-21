const mongodb = require('../db/connect');
const Objectid = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDb().db().collection('contact').find();
    result.toArray().then((users) => {
       res.setHeader('Content-Type', 'application/json');
       res.status(200).json(users);
    });
};

const getSingle = async (req, res) => {
    const userId = new Objectid(req.params.id);
    const result  = await mongodb.getDb().db().collection('contact').find({_id: userId});
    result.toArray().then((users) => {
       res.setHeader('Content-Type', 'application/json');
       res.status(200).json(users[0]);
    });
};

module.exports = {
    getAll,
    getSingle
}