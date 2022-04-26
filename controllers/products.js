import db from "../database/db.js"

const routeName = "products"

const controller = {
    

    get(req,res) {
        console.log("chegou um requisição GET na rota "+routeName);
        res.status(200).json(db.data[routeName]);
    },
    post(req,res) {
        console.log("chegou um requisição POST na rota "+routeName);
        console.log("o que chegou no body",req.body);
        db.data[routeName][req.body.id] = req.body
        db.write();
        res.status(200).json(db.data[routeName]);
    },
    put(req,res) {
        console.log("chegou um requisição PUT na rota "+routeName);
        console.log("o que chegou no body",req.body);
        db.data[routeName][req.body.id] = req.body
        db.write();
        res.status(200).json(db.data[routeName]);
    },
    delete(req,res) {
        console.log("chegou um requisição DELETE na rota "+routeName);
        console.log("o que chegou no body",req.body);
        delete db.data[routeName][req.body.id];
        db.write();
        res.status(200).json(db.data[routeName]);
    },

}

export default controller;