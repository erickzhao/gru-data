const faker = require("faker");
const json2csv = require("json2csv").parse;
const getUsers = require('../user/user').getUsers
const fs = require("fs");

faker.seed(1337);

const data = [];
const users = getUsers();

for (let i = 0; i < 100; i++) {
  data.push({
    date_added: faker.date.recent(10),
    is_primary: true,
    username: users[i].username,
    public_key: faker.finance.bitcoinAddress()
  });
}

const csv = json2csv(data);

fs.writeFileSync("payments/riseupcoin.csv", csv);
