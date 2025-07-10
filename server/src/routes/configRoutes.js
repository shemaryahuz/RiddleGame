import riddleRouter from "./riddleRouter.js";
import playerRouter from "./playerRouter.js";

export default function configRoutes(app){
    // if route is '/riddles' run the riddle router
    app.use("/riddles", riddleRouter);
    // if route is '/players' run the player route
    app.use("/players", playerRouter);
    // if route not found, response with message and status code 'not found'
    app.use((req, res) => {
        res.status(404).json({ msg: "Route not found"});
    })
}
