import * as Joi from 'joi';

export const detailValidationSchema = Joi.object({
  name: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]+$')).required(),
  clean_name: Joi.string().required(),
  detail_number: Joi.number().optional(),
});

