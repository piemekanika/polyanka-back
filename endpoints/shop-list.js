const {faker} = require('@faker-js/faker');

module.exports = function (app) {
    app.get('/shop-list', (req, res) => {

        const list = []

        for (let i = 0; i < 5; i++) {
            const shop = {
                name: faker.company.name(),
                description: faker.company.catchPhrase(),
                rate: faker.random.numeric(),
            }

            list.push(shop)
        }

        res.send({
            shops: list
        })
    })
}
