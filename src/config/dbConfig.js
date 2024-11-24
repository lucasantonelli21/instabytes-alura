import { MongoClient } from "mongodb";



export async function createMongoClient(stringConexao ) {   
        var mongoClient;
        try{
            mongoClient = new MongoClient(stringConexao);
            console.log("Tentando conexao com Atlas");
            await mongoClient.connect();
            console.log("Conectado");
            return mongoClient
        }catch(error){
            console.error('Falha ao se conectar com o banco!', error);
            process.exit();
        }
    }
