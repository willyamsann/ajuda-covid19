const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
         const ongs = await connection('ongs').select('*');
     
         return response.json(ongs);
     },
    async create(request, response){
        const {nome, email, whatsapp, cidade, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //criar um id aleatorio usando biblioteca random
    
      await  connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        })
        console.log(id);
    
    
        return response.json({
        id
        });
    }
}