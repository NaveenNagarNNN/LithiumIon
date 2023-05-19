import { app } from "./app.js";
import Cheerio from "cheerio";
import axios from "axios";


let price, pricerange;
const url = 'https://www.metal.com/Lithium-ion-Battery/202303240001';
axios.get(url).then((res) => {
    const $ = Cheerio.load(res.data);
    price = $('.metalsContent___3T_m3 .block___2RfAT  ').text();

    console.log(price);

}).catch((error) => {
    console.log(error);
});


app.get('/', (req, res) => {
    res.send(`<h1>Avg:. ${price}<br>
    ${price} </h1>    
    `);
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