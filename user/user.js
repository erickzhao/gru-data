const faker = require("faker");
const json2csv = require("json2csv").parse;
const fs = require("fs");

faker.seed(1337);

function getUsers() {
  const data = [];
  for (let i = 0; i < 100; i++) {
    const first = faker.name.firstName();
    const last = faker.name.lastName();
    data.push({
      username: faker.internet.userName(first, last),
      password: faker.internet.password(),
      email: faker.internet.email(first, last),
      creation_date: faker.date.recent(1000),
      name: `${first} ${last}`
    });
  }

  return data;
}

const csv = json2csv(getUsers());

fs.writeFileSync("user/users.csv", csv);

module.exports = { getUsers };
