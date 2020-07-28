const crypto = require('crypto');

const connection = require('../database/connection');
const { update } = require('../database/connection');
const { response } = require('express');

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
    },

    async updateName(request, response) {
        const { id, nameAlt } = request.body;
        
        await connection('pessoas').where('id', id).update({ name: nameAlt });

        return response.status(204).send();
    },

    async updateTelefone(request, response) {
        const { id, telefoneAlt } = request.body;

        await connection('pessoas').where('id', id).update({ telefone: telefoneAlt })

        return response.status(204). send();
    },

    async updateEmail(request, response) {
        const { id, emailAlt } = request.body;

        await connection('pessoas').where('id', id). update({ email: emailAlt })

        return response.status(204).send();
    }
}
