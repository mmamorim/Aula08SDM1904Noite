
import api from "./api.js"

export default {
    template: `
        <div class="p-2 bg-gray-50">
            <p>Clientes</p>
            <button @click="fazGet" class="border rounded px-1 hover:bg-gray-100 text-sm">GET</button>
            <button class="border rounded px-1 hover:bg-gray-100 text-sm" id="btn2">POST</button>
            <button class="border rounded px-1 hover:bg-gray-100 text-sm" id="btn3">PUT</button>
            <button class="border rounded px-1 hover:bg-gray-100 text-sm" id="btn4">DELETE</button>
            <div class="p-2 bg-gray-300">
                <div class="my-1">
                    <span>ID: </span>
                    <input type="text"/>
                </div>
                <div class="my-1">
                    <span>NOME: </span>
                    <input type="text"/>
                </div>
                <div class="my-1">
                    <span>EMAIL: </span>
                    <input type="text"/>
                </div>
            </div>
            <div class="p-2 bg-gray-50">
                {{lista}}
            </div>
        </div>    
    `,
    data() {
        return {
            lista: {}
        }
    },
    methods: {

        fazGet() {
            let self = this;
            api.get('clients')
                .then((res) => {
                    console.log("retorno do servidor");
                    console.log(res.data);
                    self.lista = res.data;
                }).catch((e) => {
                    console.log("erro", e);
                });

        }
    }
}