class Model {
  constructor(...params) {
    params.forEach((param) => {
      this[param] = param;
    });
  }
}

module.exports = Model;
