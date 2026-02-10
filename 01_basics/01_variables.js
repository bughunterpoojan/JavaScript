const accountId = 12534
let accountEmail =  "kamanipoojan@gmail.com"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
var accountPass = "12345"
accountCity = "Junagadh"
let accountState;

accountEmail = "kp@kp.com"
accountPass = "24351"
accountCity = "Gathila"
// accountId = 21212 const can't be changed
console.log(accountId);

console.table([accountId,accountEmail,accountPass,accountCity,accountState])
