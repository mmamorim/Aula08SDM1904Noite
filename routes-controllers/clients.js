
const controller = {

    list(req,res) {
        console.log("chegou um requisição GET na rota clients");
        res.status(200).json({ algo: "oi GET"});
    },
    add(req,res) {
        console.log("chegou um requisição POST na rota clients");
        res.status(200).json({ algo: "oi POST"});
    },
    update(req,res) {
        console.log("chegou um requisição PUT na rota clients");
        res.status(200).json({ algo: "oi PUT"});
    },
    remove(req,res) {
        console.log("chegou um requisição DELETE na rota clients");
        res.status(200).json({ algo: "oi DELETE"});
    },

}

export default controller;