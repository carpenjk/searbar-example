import * as yup from 'yup';

const searchSchema = yup.object().shape({
  search: yup.string().max(20),
  minPrice: yup
    .number()
    .nullable(true)
    .integer()
    .min(0)
    .max(300)
    .transform((_, val) => (val === Number(val) ? val : null)),
  maxPrice: yup
    .number()
    .nullable(true)
    .integer()
    .min(0)
    .max(300)
    .transform((_, val) => (val === Number(val) ? val : null)),
  colors: yup.lazy((val) => (Array.isArray(val)
    ? yup.array().of(yup.string().max(50))
    : yup.string().max(50))),
});

export default searchSchema;
