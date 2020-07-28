import Joi from 'joi';

const greaterOrEqual = (joi: Joi.Root): Joi.Extension => ({
  name: 'number',
  base: joi.number(),
  language: {
    greaterOrEqual: 'must be greater than or equal "{{greaterOrEqual}}"',
  },
  rules: [{
    name: 'greaterOrEqual',
    params: {
      greaterOrEqual: joi.func().ref().required().default(0),
    },
    validate(params: any, value: any, state: any, options: any): any {
      const prevName = params.greaterOrEqual.root;
      const prev = state.parent[prevName];
      const current = value;
      if (current < prev) {
        return (this as any).createError(
          'number.greaterOrEqual',
          {
            value,
            greaterOrEqual: prevName,
            [prevName]: prev,
          },
          state,
          options
        );
      }
      return value;
    },
  }],
});

const extendedJoi: Joi.Root = Joi.extend([
  greaterOrEqual,
]);

export default extendedJoi;
