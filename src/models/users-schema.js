'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const roles = require('./roles-schema');

/**
 * The schema definition for a user record
 * @type {mongoose.Schema}
 */
const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  role: { type: String, default: 'user', enum: ['admin', 'editor', 'user'] },
});
/**
 * This f compares plaintext pass with stored hashed password with an individual user
 * @param {string} plainTextPassword
 * @return {boolean}                  - true or false
 */

users.methods.comparePassword =  async function(plainTextPassword){
  return await bcrypt.compare(plainTextPassword, this.password);
}


users.methods.generateToken = async function (timeout){ 
  let expiry = Math.floor(Date.now()/1000) + 60*60;
if(parseInt(timeout))
  expiry = Math.floor(Date.now() / 1000) + parseInt(timeout);

  let secret = process.env.JWT_SECRET;
    return jwt.sign({
      data:{
        id: this._id
      },
      exp: expiry,
    }, secret);
}


/**
 * Exporting a mongoose model generated from the above schema, statics, methods and middleware
 * @type {mongoose model}
 */
module.exports = mongoose.model('users', users);
