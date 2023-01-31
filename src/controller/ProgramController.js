const path = require('path');

module.exports = {

    async index(req, res) {
        // var abcString = "X:1\nT:Example\nK:Bb\nBcde|\n";
        return res.render(path.resolve('src/view/index'),{});
    },

    async abc(req, res) {
        // var abcString = "X:1\nT:Example\nK:Bb\nBcde|\n";
        return res.render(path.resolve('src/view/index'),{});
    },

}
