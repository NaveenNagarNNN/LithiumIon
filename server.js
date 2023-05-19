import { app } from "./app.js";

app.get('/', (req, res) => {
    res.send("<h1>Working Fine Now trying to attach api</h1>");
});

app.route("/users").get((req, res, next) => {
    res.status(200).json({
        user: [],
        success: false,
    });
});

//PORT
const PORT = 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on 8080`)
});