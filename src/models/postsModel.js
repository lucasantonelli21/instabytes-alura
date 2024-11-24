import 'dotenv/config';
import { ObjectId } from "mongodb";
import { createMongoClient } from "../config/dbConfig.js";
const connection = await createMongoClient(process.env.CONNECTION_STRING);
const db = connection.db("imersao-instabytes-port");
const collection = db.collection("posts");



export async function getTodosPosts(){
    return collection.find().toArray();
}


export async function createPost(novoPost){
    return collection.insertOne(novoPost);
}


export async function updatePost(id,post){
    const objID = ObjectId.createFromHexString(id);

    return collection.updateOne({_id: new ObjectId(objID)},{$set: post});
}