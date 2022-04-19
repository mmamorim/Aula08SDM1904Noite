
import controller from "../routes-controllers/clients.js"
const routeName = "/clients";

function route(app) {

    app.route(routeName).get(controller.list);
    app.route(routeName).post(controller.add);
    app.route(routeName).put(controller.update);
    app.route(routeName).delete(controller.remove);
    console.log(`route [${routeName}] created`);
}

export default route;