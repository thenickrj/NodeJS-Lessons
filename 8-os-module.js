// const { type } = require("node:os");
const os = require("os");

// info about the current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in second
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMe: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
