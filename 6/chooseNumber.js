//1st task at 6th lesson
//Actually, I am not sure if that is what you asked for in this task, sorry :(

//while
var i = 0;
while(!confirm('Are you satisfied with number being ' + ++i + '?'));
console.log('You\'ve chosen ' + i);

//for
for(var i = 1; !confirm('Are you satisfied with number being ' + i); i++);
console.log('You\'ve chosen ' + i);