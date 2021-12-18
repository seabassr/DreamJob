const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/progress', (req, res) => {
    res.render('progress');
});

router.get('/forms', (req, res) => {
    res.render('forms');
});

module.exports = router;