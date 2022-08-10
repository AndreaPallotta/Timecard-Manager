const os = require('os');
const osu = require('node-os-utils');

exports.getSysInfo = async (_, res, next) => {
  try {
    const { os, users, osCmd, cpu, drive, mem, netstat } = osu;
    const info = {
      general: {
        os: await os.oos(),
        ip: os.ip(),
        hostname: os.hostname(),
        sessions: users.openedCount(),
      },
      cpu: {
        count: cpu.count(),
        model: cpu.model(),
        usage: await cpu.usage(),
        average: cpu.average(),
        free: await cpu.free(),
        top: await osCmd.topCpu(),
      },
      memory: {
        free: await mem.free(),
        used: await mem.used(),
        top: await osCmd.topMem(),
      },
      netstat: {
        inOut: await netstat.inOut(),
      },
    };
    res.send(info);
  } catch (err) {
    next(err);
  }
};
