const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const pessoas = await connection('pessoas').select('*');

        return response.json(pessoas);
    },

    async create(request, response) {
        const { name, telefone, email } = request.body;

        const id = crypto.randomBytes(4).toString('hex');

        await connection('pessoas').insert({
            id,
            name,
            telefone,
            email
        })

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('pessoas').where('id', id).delete();

        return response.status(204).send();
    }
}
