const id = Symbol('userID');

const user = {
    name: 'Soumen',
    age: 19,
    [id]: 1234
};

// Use Reflect.ownKeys to get all keys (strings + symbols)
for (const key of Reflect.ownKeys(user)) {
    console.log(`${String(key)}: ${user[key]}`);
}

console.log("5" !== 5);
console.log("5" == 5);
console.log("5" === 5);
console.log(5 == 5);
console.log(5 === 5);
let statu = 1;
let statuscode = 3;
let value = (statu === 900) ? "OK" : "Not OK";

console.log(value);
if (statuscode == statu) {
    console.log("OK");
}
else {
    let total = statu & statuscode;
    console.log(~total);
    console.log("Not OK");
}
// Operator 

let loggedIn = true;
let isAdmin = false;

if (loggedIn && isAdmin) {
    console.log("Access to admin panel");
} else if (loggedIn || isAdmin) {
    console.log("Limited access");
} else {
    console.log("No access");
}
console.log("This is is number", isAdmin);