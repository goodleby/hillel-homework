function getAge() {
	var age = Number(prompt('What is your age?'));
  return (!isNaN(age) && age > 0) ? age : (
  	alert('It\'s wrong input... try again'),
    getAge()
  );
}

var age = getAge();
age > 18 ? (
	alert('Access granted.')
) : age < 12 ? (
	alert('We have something cool for ya, kiddo! :)')
) : (
	alert('Sorry. Access denied.')
);