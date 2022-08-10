const { getSysInfo } = require('@routes/dev/dev.controller');

const router = require('express').Router();

router.get('/sysinfo', getSysInfo);

module.exports = router;
