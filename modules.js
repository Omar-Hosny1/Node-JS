const names = require("./names");
const sayHello = require("./sayHi");

sayHello(names.names.hosny);
sayHello(names.names.omar);

const { userInfo, uptime, type } = require("os");
console.log(userInfo());
console.log((uptime() % 60) % 60);
console.log(type());
