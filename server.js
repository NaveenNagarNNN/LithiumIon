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
    try {
        res.send(`<h1> ${price}</h1>    
    `);
    } catch (error) {
        console.log(error)
    }
});

app.route("/price").get((req, res) => {
    try {
        res.status(200).json({
            user: [],
            success: false,
        });
    } catch (error) {
        console.log(error);
    }
});

//PORT
const PORT = 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on 8080`)
});