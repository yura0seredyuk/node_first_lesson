const os = require('os');

console.log("Operating system: ", os.platform());

console.log("CPU architecture: ", os.arch());

console.log("CPU info: ", os.cpus());

console.log('Empty memory: ', os.freemem());

console.log("Memory total: ", os.totalmem());

console.log("Home directory: ", os.homedir());

console.log("Turn on system: ", os.uptime());
