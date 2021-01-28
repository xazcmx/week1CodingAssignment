var itemPrice = 19.99;
var moneyInWallet = 278.50;
var numberOfFriends = 52;
var age = 37;
var firstName = 'Jimmy';
var lastName = 'McTimmy';
var middleInitial = 'G';

var newMoneyInWallet = moneyInWallet - itemPrice;
var friendsPerYear = numberOfFriends / age;
var fullName = firstName + ' ' + middleInitial + ' ' + lastName;

console.log('I have ' + newMoneyInWallet + ' after buying the thing.');
console.log('I have made ' + friendsPerYear + ' friends each year I have lived.');
console.log(fullName);
