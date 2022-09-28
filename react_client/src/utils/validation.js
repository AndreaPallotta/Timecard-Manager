export const nullSafe = (value) =>
  typeof value === 'undefined' || value === null;

export const isFormValid = (validations, filter = () => true) =>
  Object.values(validations)
    .filter(filter)
    .every((condition) => condition === true);
