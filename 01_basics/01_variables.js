const account_id = 145771
let account_email="sneha@gmail.com"
var account_password = "7182"
account_city = "Bengaluru"

//account_id= 123451 // this is not allowed const value doest change

account_email = "chai12@gmail.com"
account_password = "89123"
account_city = "Hyderabad"
let account_state;

console.log(account_id);
// console.log(account_email);
// console.log(account_password);
// console.log(account_city);     

/* Prefer not to use var - because of issue in block scope and functional scope */

console.table([account_email,account_id,account_password,account_city,account_state])

/* Small Note - const- stays same cant change it , let- can change , var- can change but not used! 

