//CommonJS, every file is module (by default)
// Modules -Encapsulated Code (only share minimum)
const names = require("./4-names");
const { sayHi } = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
module.exports.asdf = "YESSSS";
console.log(data);

// sayHi("Nick");
// sayHi(names.name1);
// sayHi(names.name2);
