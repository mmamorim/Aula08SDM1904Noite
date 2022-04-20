
import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile("./database/database.json")
const db = new Low(adapter)

db.read()
.then(() => {
    console.log("ok. Parece que o database.json foi carregado na memória...");

    //console.log("db.data ANTES",db.data);
    //db.data.pessoas.ana = { id: "ana", nome: "Ana Silva" };
    //console.log("db.data DEPOIS",db.data);
    //db.write();
})
.catch((e)=> { console.log(e);});

export default db;