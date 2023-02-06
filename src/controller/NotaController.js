const axios = require('axios');

module.exports = {
    async nota() {
        try {
            const { data } = await axios.get('http://192.168.0.177');
            // console.log(data.nota);
            return (data.nota);
        } catch( error) {
            // console.error(error);
            return null;
        }
    },

}