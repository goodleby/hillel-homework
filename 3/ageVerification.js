function getRealAge() {
	var age = Number(prompt('What is your age?'));
  if(Number.isNaN(age) || 0 >= age) {
  	alert('Please, make it right. Try again');
    return getRealAge();
  } else if(age > 18) {
    alert('You got access to the service');
  } else if(age < 12) {
    alert('You\'re not allowed for this one, BUT we have another one for ya!');
  } else {
    alert('Sorry, access denied.');
  }
};
getRealAge();