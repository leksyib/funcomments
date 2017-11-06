const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const routes = require("./routes/index");
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));  
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});