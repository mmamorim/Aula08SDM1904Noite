
import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

import routeClient from "./routes/clients.js" 
routeClient(app);

app.listen('4000',() => {
    console.log("Servidor escutando na porta 4000");
});