import api from "./api.js"
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import topo from "./topo.js"
import sidemenu from "./sidemenu.js"
import painel from "./painel.js"
import painelprodutos from "./painel-produtos.js"

createApp({
    components: {
        topo, sidemenu, painel, painelprodutos
    },
    data() {
        return {
        }
    },
    methods: {
    
    }
}).mount('#meuApp')



//let b1 = document.getElementById("btn1");
//let b2 = document.getElementById("btn2");
//let b3 = document.getElementById("btn3");
//let b4 = document.getElementById("btn4");
//
//b1.addEventListener('click', () => {
//    api.get('clients')
//        .then((res) => {
//            console.log("retorno do servidor");
//            console.log(res.data);
//        }).catch((e) => {
//            console.log("erro", e);
//        });
//});
//
//b2.addEventListener('click', () => {
//    let dados = {
//        id: "cli04",
//        nome: "ABREU ALFACE",
//        email: "abreu@abreu.com"
//    }
//    api.post("clients",dados).then((res) => {
//        console.log("retorno do servidor");
//        console.log(res.data);
//    }).catch((e) => {
//        console.log("erro", e);
//    });
//
//});
//
//b3.addEventListener('click', () => {
//    let dados = {
//        id: "cli04",
//        nome: "ABREU AGRIÃO",
//        email: "abreu@abreu.com"
//    }
//    api.put("clients",dados).then((res) => {
//        console.log("retorno do servidor");
//        console.log(res.data);
//    }).catch((e) => {
//        console.log("erro", e);
//    });
//});
//
//b4.addEventListener('click', () => {
//    api.delete("clients","cli03").then((res) => {
//        console.log("retorno do servidor");
//        console.log(res.data);
//    }).catch((e) => {
//        console.log("erro", e);
//    });
//});
