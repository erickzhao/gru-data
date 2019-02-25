const faker = require("faker");
const json2csv = require('json2csv').parse;

faker.seed(1337);

const data = [];
for (let i = 0; i < 100; i++) {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  data.push({
    username: faker.internet.userName(first),
    password: faker.internet.password(),
    creation_date: faker.date.recent(1000),
    name: `${first} ${last}`
  });
}

const csv = json2csv(data);

console.log(csv);
