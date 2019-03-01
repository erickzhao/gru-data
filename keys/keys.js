const faker = require("faker");
const json2csv = require("json2csv").parse;
const fs = require("fs");

faker.seed(1337);

const data = [];
for (let i = 0; i < 400; i++) {
  data.push({
    key: `${faker.finance.bic()}-${faker.finance.bic()}-${faker.finance.bic()}`,
    listing_id: i % 45 + 1,
    redeemed: Boolean(i%2)
  });
}

const csv = json2csv(data);

fs.writeFileSync("keys/keys.csv", csv);
