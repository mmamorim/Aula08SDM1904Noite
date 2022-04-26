
import express from "express"
import cors from "cors"

import routeClient from "./routes/clients.js" 
import routeProducts from "./routes/products.js" 
import routeFilmes from "./routes/filmes.js" 

const app = express(); 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/site",express.static('public'))

routeClient(app);
routeProducts(app);
routeFilmes(app);

app.listen('4000',() => {
    console.log("Servidor escutando na porta 4000");
});