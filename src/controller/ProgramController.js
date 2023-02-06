const path = require('path');
const tom = require('./NotaController');

module.exports = {

    async index(req, res) {
        try {
            let notas = await tom.nota();
            return res.render(path.resolve('src/view/index_key'),
            {
                nota: notas,
            });
        } catch( error) {
            console.error(error);
            return res.status(400).json({ // 400 Bad Request
                error: "Nothing Here! For Good ;)"
            });
        }
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
