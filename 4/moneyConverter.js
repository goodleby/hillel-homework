//1 USD = ?
var currencies = {
	RUB: 63.87,
  UAH: 25.16,
  USD: 1
};
var currenciesStr = '';
var i = 0;
for(var key in currencies) {
  i > 0 ? currenciesStr += ', ' : '';
	currenciesStr += key;
  i++;
}

function getValidCurrency(message) {
	var currency = prompt(message);
  for(var key in currencies) {
  	switch(currency) {
    	case key:
      	return currency;
    }
  }
  alert('Please, choose one of the currencies from the list: ' + currenciesStr + '. Try again.');
  return getValidCurrency(message);
}
function getValidNum(message) {
  var num = prompt(message);
  return (!isNaN(num) && num > 0) ? num : (
    alert('It\'s wrong input... try again'),
    getValidNum(message)
  );
}

var currencyFrom = getValidCurrency('What currency you want to convert from? List of currencies: ' + currenciesStr);
var currencyTo = getValidCurrency(currencyFrom + ' => ' + currenciesStr);
var money = getValidNum('Type amount of money in ' + currencyFrom);

var convertedMoney = ((currencies[currencyTo] * money) / currencies[currencyFrom]).toFixed(2);
alert(money + ' ' + currencyFrom + ' => ' + convertedMoney + ' ' + currencyTo);