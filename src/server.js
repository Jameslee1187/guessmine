import {
    join
} from "path"
import express from "express"

const PORT = 4000;
const app = express();
app.set("view engine", "pug")
app.set("views", join(__dirname, "views") const handleListening = () => {
            console.log("server started")
        };

        app.get("/", (req, res) => res.render("home"))

        app.listen(PORT, handleListening);