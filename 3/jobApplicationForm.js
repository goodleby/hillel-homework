var requirements = {
	minAge: 30,
  minExperience: 3
}

var candidate = {
  score: 0
};

candidate.fullName = prompt('Hello! This is online form for submiting for the job. Please introduce yourself', 'John');

function getUnsignedNum(message) {
	var num = Number(prompt(message));
  if(Number.isNaN(num) || 0 >= num) {
  	alert('Please, make it right. Try again');
    return getUnsignedNum(message);
  } else return num;
};

candidate.age = getUnsignedNum('What is your age, ' +  candidate.fullName + '?');
if(candidate.age < requirements.minAge) {
	alert('Your age is lower than required.');
} else {
	candidate.score++;
}

candidate.experience = getUnsignedNum(candidate.fullName + ', how many years have you worked in this area?');
if(candidate.experience < requirements.minExperience) {
	alert('You have less experience than required');
} else {
	candidate.score++;
}
if(candidate.score === Object.keys(requirements).length) {
	alert('Congragulations! You\'re ok for all our requirements');
} else if(candidate.score <= Object.keys(requirements).length / 2) {
	alert('You are ok for at least half of the requirements');
} else {
	alert('We\'ll call ya.');
}