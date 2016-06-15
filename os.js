const os = require('os');
console.log("os",os);
console.log("system's default: ",os.tmpdir());
console.log("endianess of the cpu: ",os.endianness());
console.log("operating system name: ",os.type());
console.log("operating system platform: ",os.platform());
console.log("total amount of system memory (bytes): ",os.totalmem());
console.log("amount of system free memory (bytes): ",os.freemem());
