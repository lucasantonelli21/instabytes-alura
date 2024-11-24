import fs from 'fs';
import { getTodosPosts, createPost, updatePost} from "../models/postsModel.js";
import {gerarDescricaoComGemini} from "../services/geminiService.js";

export async function listarPosts  (req,res){
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}



export async function createPosts(req, res) {
    const novoPost = req.body;
    try{
        const postCriado = await createPost(novoPost);
        res.status(200).json(postCriado);
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Erro" :"Falha na requisição."});
    }
}



export async function uploadImg(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try{
        const postCriado = await createPost(novoPost);
        const updatedImg = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, updatedImg);
        res.status(200).json(postCriado);
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Erro" :"Falha na requisição."});
    }
}


export async function updatePosts(req,res) {
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.png`;
     try{
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);
        const post = {
            imgUrl: urlImg,
            descricao: descricao,
            alt: req.body.alt
        };
        const postUpdated = await updatePost(id,post);
        res.status(200).json(postUpdated);
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Erro" :"Falha na requisição."});
    }
}