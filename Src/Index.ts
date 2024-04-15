const {conn} = require("./db");
import { app } from "./app";
conn.sync({force:false}).then(() => {
    app.listen(3001, () => {
        console.log("Listen in the port" + 3001);
    });
});