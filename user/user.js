const faker = require("faker");
const json2csv = require("json2csv").parse;
const fs = require("fs");

faker.seed(1337);

const data = [];
for (let i = 0; i < 100; i++) {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  data.push({
    username: faker.internet.userName(first,last),
    email: faker.internet.email(first,last),
    password: faker.internet.password(),
    creation_date: faker.date.recent(1000),
    name: `${first} ${last}`
  });
}

const csv = json2csv(data);

fs.writeFileSync("user/users.csv", csv);
