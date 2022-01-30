const calculate = require('../service/calculate');

exports.add = (req, res) => {
    res.json(calculate.add(req.body.n1, req.body.n2));
};

exports.sub = (req, res) => {
    res.json(calculate.sub(req.body.n1, req.body.n2));
};

exports.multi = (req, res) => {
    res.json(calculate.multi(req.body.n1, req.body.n2));
};

exports.div = (req, res) => {
    res.json(calculate.div(req.body.n1, req.body.n2));
};