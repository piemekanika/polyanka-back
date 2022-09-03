const { faker } = require('@faker-js/faker');

module.exports = function (id) {
    const shop = {
        name: faker.company.name(),
        description: faker.company.catchPhrase(),
        rate: faker.random.numeric(),
        id,
    };

    return shop;
};
