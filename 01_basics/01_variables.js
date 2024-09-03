const accountId=12345
let accountEmail="sabeel@gmail.com"
var accountPassword="12121"
accountCity="jaipur"
let accountState;

//accountId=2 // redeaclaration and reasignment not allowd

accountEmail="gtr@jdgmail.com"
accountPassword="11224455"
accountCity="bangaluru"

console.log(accountId);

/*
prefer not to use var 
becouse of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])