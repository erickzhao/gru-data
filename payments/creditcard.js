const faker = require("faker");
const users = require("../user/users.json");
const json2csv = require("json2csv").parse;
const fs = require("fs");

faker.seed(1337);

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    date_added: faker.date.recent(10),
    is_primary: false,
    username: users[i].username,
    public_key: faker.finance.creditCardNumber()
  });
}

const csv = json2csv(data);

fs.writeFileSync("payments/creditcard.csv", csv);
