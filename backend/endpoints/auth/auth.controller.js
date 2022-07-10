exports.login = async (req, res, next) => {
  //   return res.json({
  //     firstName: 'first name',
  //     lastName: 'last Name',
  //     email: 'email@email.com',
  //     isAdmin: true,
  //   });
  res.status(400).json({ Error: 'test 400 error' });
};

exports.signUp = async (req, res, next) => {};

exports.signOut = async (req, res, next) => {};

exports.getSession = async (req, res, next) => {};
