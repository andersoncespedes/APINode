"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { conn } = require("./db");
const app_1 = require("./app");
conn.sync({ force: true }).then(() => {
    app_1.app.listen(3001, () => {
        console.log("Listen in the port" + 3001);
    });
});
