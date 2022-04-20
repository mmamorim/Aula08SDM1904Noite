import db from "../database/db.js"

const controller = {

    get(req,res) {
        console.log("chegou um requisição GET na rota clients");
        res.status(200).json(db.data.clients);
    },
    post(req,res) {
        console.log("chegou um requisição POST na rota clients");
        console.log("o que chegou no body",req.body);
        db.data.clients[req.body.id] = {
            id: req.body.id,
            nome: req.body.nome,
            email: req.body.email
        }
        db.write();
        res.status(200).json(db.data.clients);
    },
    put(req,res) {
        console.log("chegou um requisição PUT na rota clients");
        console.log("o que chegou no body",req.body);
        db.data.clients[req.body.id] = {
            id: req.body.id,
            nome: req.body.nome,
            email: req.body.email
        }
        db.write();
        res.status(200).json(db.data.clients);
    },
    delete(req,res) {
        console.log("chegou um requisição DELETE na rota clients");
        console.log("o que chegou no body",req.body);
        delete db.data.clients[req.body.id];
        db.write();
        res.status(200).json(db.data.clients);
    },

}

export default controller;