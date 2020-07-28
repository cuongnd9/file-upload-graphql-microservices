import { flow, flatten } from 'lodash';
import joi, { ValidationResult } from 'joi';

import { SchemaValidationError } from './errors';

export const middleware = (...parameters: any[]) => (obj?: any, args?: any, context?: any, info?: any) => {
  const resolver = parameters[parameters.length - 1];
  flow([...parameters.slice(0, parameters.length - 1)])(obj, args, context, info);
  return resolver(obj, args, context, info);
};

export const validateSchema = (schema: any = {}) => (...rest: any[]) => {
  const flattenRest = flatten(rest);
  const root = flattenRest[0];
  const args = flattenRest[1];
  const value = {
    ...root,
    ...args,
  };
  const validateOptions = { allowUnknown: true, abortEarly: false };
  const validation: ValidationResult<any> = joi.validate(value, schema, validateOptions);
  if (validation.error) {
    throw new SchemaValidationError(validation.error);
  }
  return rest;
};

export const validateAction = (action: string) => (...rest: any[]) => {
  // TODO: get actions here
  const actions: string[] = ['orders', 'order'];
  if (actions.indexOf(action) === -1) {
    throw new Error('You do not have permission');
  }
  return rest;
};
