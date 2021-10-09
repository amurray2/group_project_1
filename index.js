let express = require("express");
let app = new express();app.set("view engine","ejs");
// set up database connection
const knex = require("knex")({
    client: "mysql",
    connection: {
        host:"paradisedonutcompany.cluster-cpg2emolmnwk.us-east-2.rds.amazonaws.com",
        user: "admin",
        password: "pdcompanytest",
        database:"donuts",
        port: 3306,
    },
});

app.get("/",(req,res) => {
    knex.select()
    .from("donuts")
    .then((result) => {
        console.log(result);
        res.render("index", {aDonutList: result});
    });
});
app.listen(3000);