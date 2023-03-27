import express from "express";
import homeControllers from "../controllers/homeControllers";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/luongchiendev', (req, res) => {
        return res.send('Hello World, luongchiendev')
    })
    return app.use("/", router);
}

module.exports = initWebRoutes;