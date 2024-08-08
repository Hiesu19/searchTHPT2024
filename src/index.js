const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
var methodOverride = require('method-override')
const path = require("path");

const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//MOrgan
app.use(morgan("combined"));

//MethodOverride
app.use(methodOverride('_method'))

//Template engine
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
