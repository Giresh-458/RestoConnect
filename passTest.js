const bcrypt = require('bcrypt');



let a = bcrypt.hashSync('123',1);
let b = bcrypt.hashSync('1233',1);


console.log(bcrypt.compareSync(a,'123'));
console.log(bcrypt.compareSync(b,'1233'));