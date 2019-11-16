'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
 

router.post('/signup',(req, res, next) => {});


router.post('/signin', auth, (req, res, next) => {
    //what ifo should i have from the request?

    res.status(200).json({token: token});
});

module.exports = router;
