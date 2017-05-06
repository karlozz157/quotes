var express = require('express'),
    router = express.Router(),
    Quote = require('../models/Quote');

router.route('/quotes')
    .get(function (req, res) {
        Quote.find()
        .then(function (quotes) {
            res.json({'quotes': quotes});
        }, function (error) {
            throw error;
        });
    })
    .post(function (req, res) {
        var quote = new Quote();
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.save()
        .then(function (quote) {
            res.json({'quote': quote});
        }, function (error) {
            throw error;
        });
    });

router.route('/quotes/:id')
    .get(function (req, res) {
        Quote.findById(req.params.id)
        .then(function (quote) {
            res.json({'quote': quote});
        }, function (error) {
            throw error;
        });
    })
    .put(function (req, res) {
        var quote = {'name': req.body.name, 'quote': req.body.quote};
        Quote.findOneAndUpdate(req.params.id, {$set: quote})
        .then(function (quote) {
            res.json({'quote': quote});
        }, function (error) {
            throw error;
        });
    })
    .delete(function (req, res) {
        Quote.findOneAndRemove(req.params.id)
        .then(function (quote) {
            res.json({'quote': quote});
        }, function (error) {
            throw error;
        });
    });

module.exports = router;
