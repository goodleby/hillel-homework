const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const hostname = 'localhost';

class User {
  constructor(name, age, role = 'visitor') {
    this.name = name.toUpperCase()[0] + name.toLowerCase().slice(1);
    this.age = age;
    this.role = role.toUpperCase();
  }
}
const users = [];
users.push(new User('Alex', 18, 'ADMIN'));

app
  .use(express.static('../public'))
  .use(cors())
  .use(express.json())
  .listen(port, () => console.log(`Server is running at http://${hostname}:${port}/`));

//Endpoints
app.get('/', (request, response) => {
  response.send(
    `Hi there! You can visit <a href="http://${hostname}:${port}/users">http://${hostname}:${port}/users</a> to get users, or post new user to the page.`
  );
});
app.get('/users', (request, response) => {
  response.send(users);
});
app.post('/users', (request, response) => {
  const {name, age, role} = request.body;
  users.push(new User(name, age, role));
  response.status(201).send(request.body);
});
