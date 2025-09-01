const bcrypt = require('bcryptjs');

async function hashing(){
    let password="hello123"

let hashpassword=await bcrypt.hash(password,10);
console.log(hashpassword)
}
hashing();