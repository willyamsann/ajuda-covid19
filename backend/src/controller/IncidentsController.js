const connection = require('../database/connection');
module.exports = {
        async index(request, response){
            const {page = 1} = request.query
           
            const [count] = await connection('incidents')
                .count();

                console.log(count);
            
            const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=','incidents.ong_id')
            .limit(5)
            .offset((page -1)*5)
            .select(['incidents.*','ongs.nome','ongs.email','ongs.whatsapp','ongs_','ongs.cidade','ongs.uf']);

            response.header('X-Total-Count', count['count(*)']);    
            return response.json(incidents);
        },
 
        async create(request, response){
        const {titulo,descricao,tipo} = request.body;
        const ong_id = request.headers.autorizacao;

        const [id] = await connection('incidents').insert({
            titulo,
            descricao,  
            tipo,
            ong_id,

        });
        return response.json({id});
    },
    async delete(request,response){
        const {id} = request.params;
        const ong_id = request.headers.autorizacao;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

            if(incidents.ong_id != ong_id){
                return response.status(401).json({error: "Operacão Não permitida"
                });
            }
            await connection('incidents').where('id', id).delete();

            return response.status(204).send();
    }
}