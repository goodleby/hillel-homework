//1 USD = ?
var currencies = {
	RUB: 64.23,
  UAH: 24.63,
  USD: 1
};
function getCurrency(message) {
	var currency = prompt(message, 'USD');
  var valid = false;
  for(var key in currencies) {
    if(currency === key) {
      valid = true;
      break;
    }
  }
  if(!valid) {
  	alert('Not valid currency! Try again');
    return getCurrency(message);
  } else return currency;
}
var currencyFrom = getCurrency('What currency you want to convert? RUB, UAH, USD?');
var currencyTo = getCurrency(currencyFrom + ' to RUB, UAH, USD?');

function getMoneyNum(message) {
	var num = Number(prompt(message, 1000));
  if(Number.isNaN(num)) {
  	alert('Please, make it right. Try again');
    return getMoneyNum();
  } else return num;
};
var money = getMoneyNum('Type amount of money in ' + currencyFrom, 1000);
var convertedMoney = ((currencies[currencyTo] * money) / currencies[currencyFrom]).toFixed(2);
alert(money + ' ' + currencyFrom + ' -> ' + convertedMoney + ' ' + currencyTo);