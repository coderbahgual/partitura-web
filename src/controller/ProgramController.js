const path = require('path');

module.exports = {

    async index(req, res) {
        return res.render(path.resolve('src/view/index'),{});
    },

}
