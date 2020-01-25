class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const getRandNum = (min, max) =>
  max === undefined
    ? getRandNum(0, min - 1)
    : Math.floor(Math.random() * (max - min + 1) + min);
const names = ['Alex', 'Victor', 'Ilya', 'Timur', 'Oleg', 'Den', 'Cris', 'Mettew', 'Denis'];
const mock = Array(getRandNum(5, 10))
  .fill(0)
  .map(() => new User(names[getRandNum(names.length)], getRandNum(17, 30)));

const http = require('http');
const hostname = 'localhost';
const port = 8080;
const server = http
  .createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(JSON.stringify(mock));
    response.end();
  })
  .listen(port, hostname, error => {
    if (error) return console.log(error);
    console.log(`Server is running at http://${hostname}:${port}/`);
  });
