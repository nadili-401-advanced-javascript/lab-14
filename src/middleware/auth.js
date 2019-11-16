'use strict';

const Users = require('../models/users-model.js');
const users = new Users();
const jwt = require('jsonwebtoken');

const basicDEcode  = async (data)=>{
let bse64 = Buffer.from(encoded, 'base64');
let plainText = base64.toString();
//=> sararh:sarahpassword
let[username, password] = plainText.split(':');
let user = await users.getFromField({username});

    if (user.length && await user[0].comparePassword(password)) {
    return user[0];
    } else {
        
    }
}

module.exports = (req, res, next) => {
let  authType, authData;
if (!req.headers.authorization)
    next({status: 400, msg: 'Missing request headers!'})

  let  authSplitString = req.headers.authorization.plit(/\s+/);

  if(authSplitString.length !==2) next ('Incorrect format');

  authType = authSplitString[0];
  authData = authSplitString[1];

  if(authType === 'Basic') basicDEcode(authData);
  else if (authType === 'Bearer') user = bearerDecrypt(authData);
  else next ({status: 400, msg: 'Uknown auth type'});

    if (user) {
        req.user = user;
        req.token = user.generateToken(req.headers.timeout);
        next();
    } else next({ status: 401, msg: 'User not found from credentianlas' });


  }





