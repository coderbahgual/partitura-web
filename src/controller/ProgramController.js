const path = require('path');

module.exports = {

    async index(req, res) {
        return res.render(path.resolve('src/view/index'));
    },

    async hash(req, res) {
        let hash = Math.random().toString(36).slice(-6);
        return res.status(200).json({
            hash: hash
        });
    },

    async sheet(req, res) {
        if (req.params.key === "") {
            return res.status(400).json({ // 400 Bad Request
                error: "Nothing Here! Excuse Moi |:."
            });
        } else {
            return res.render(path.resolve('src/view/index_key'));
        }
    },

}
