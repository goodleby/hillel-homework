function askCandidateAboutNum(label) {
	var answer = prompt('What is your ' + label + '?');
  return (!isNaN(answer) && answer >= 0) ? answer : (
  	alert('It\'s wrong input... try again'),
    askCandidateAboutNum(label)
  );
}

var requirements = [
	{label: 'age', minValue: 30},
  {label: 'experience', minValue: 3}
];

var candidateScore = 0;

for(var i = 0; i < requirements.length; i++) {
	var requirement = requirements[i];
  var answer = askCandidateAboutNum(requirement.label);
  answer >= requirement.minValue ? candidateScore++ : '';
}

candidateScore === requirements.length ? (
	alert('Congrats! You 100% fit our expectations')
) : candidateScore >= requirements.length / 2 ? (
	alert('You passed at least half of the requirements ;)')
) : (
	alert('Sorry, you passed less than half requirements of ours...')
);