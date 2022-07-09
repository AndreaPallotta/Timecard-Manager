const { getSysInfo } = require('./dev.controller');

const router = require('express').Router();

router.get('/sysinfo', getSysInfo);

module.exports = router;
