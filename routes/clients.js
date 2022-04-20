
import controller from "../routes-controllers/clients.js"
const routeName = "/clients";

function route(app) {

    app.route(routeName).get(controller.get);
    app.route(routeName).post(controller.post);
    app.route(routeName).put(controller.put);
    app.route(routeName).delete(controller.delete);
    console.log(`route [${routeName}] created`);
}

export default route;