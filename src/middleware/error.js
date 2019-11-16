'use strict';

/**
 * @param {onject} err - an error 
 * 
 */
module.exports = (err, req, res, next) => {

    if(err.status)
        res.status(err.status);
    else 
        res.status(500);

    if(err.msg) res.json({error:err.msg});
    else res.json({error: 'Unkown error'});

    console.log('err!', err);
};
