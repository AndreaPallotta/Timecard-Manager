export const isFormValid = (validations, filter = () => true) =>
  Object.values(validations)
    .filter(filter)
    .every((condition) => condition === true);
