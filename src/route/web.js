import express from "express";
import homeControllers from "../controllers/homeControllers";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/about', homeControllers.getAboutPage);
    router.get('/crud', homeControllers.getCRUD);
    router.post('/post-crud', homeControllers.postCRUD);
    router.get('/get-crud', homeControllers.displayGetCRUD);
    router.get('/edit-crud', homeControllers.getEditCRUD);
    router.post('/put-crud', homeControllers.putCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;