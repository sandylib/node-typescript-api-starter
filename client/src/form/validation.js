import isEmail from 'validator/lib/isEmail';

export function email(value) {
  return value && !isEmail(value.trim()) ? 'Invalid email' : null;
}

function hasValue(value) {
  return value || value === 0;
}

export function required(requiredFields, values) {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(hasValue(values[field]) ? undefined : { [field]: 'Required' }),
    }),
    {},
  );
}