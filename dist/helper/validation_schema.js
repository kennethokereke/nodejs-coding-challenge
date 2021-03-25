"use strict";
var Joi = require('@hapi/joi');
var Schema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    name: Joi.string().lowercase().required(),
});
module.exports = {
    Schema: Schema
};
