const { validationResult } = require('express-validator');

module.exports = (validations) => {
    return async (req, res, next) => {
        for (const validation of validations) {
            const result = await validation.run(req);
            if (result.errors.length) break;
        }
        const errors = validationResult(req);

        if (errors.isEmpty()) return next();

        return res
            .status(404)
            .json({ error: `Invalid Fields - ${errors.array().toString()}` });
    };
};
