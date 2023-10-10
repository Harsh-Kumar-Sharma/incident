const Joi = require('@hapi/joi');

const fareSchema = {
  body: Joi.object({
    plazaEntry: Joi.string().max(10).allow(null),
    plazaExit: Joi.string().max(10).allow(null),
    vehicleClass: Joi.number().integer().required(),
    tollFare: Joi.number().precision(4).required(),
    overWightFare: Joi.number().precision(4).required(),
    activeDate: Joi.date().required(),
  }),
};

const updateSchema = {
  body: Joi.object({
    plazaEntry: Joi.string().max(10).allow(null),
    plazaExit: Joi.string().max(10).allow(null),
    vehicleClass: Joi.number().integer(),
    tollFare: Joi.number().precision(4),
    overWightFare: Joi.number().precision(4),
    activeDate: Joi.string(),
  }),
};
module.exports = {
  fareSchema,
  updateSchema,
};