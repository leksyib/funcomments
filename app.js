import express from 'express';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes/index';
// const flash = require("connect-flash");
// Defining the Port Variable
const port = process.env.PORT || 3000;

// Set up the express app
const app = express();
// Log requests to the console
app.use(volleyball);



// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set("views", path.join(__dirname, "views"));  
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/", routes);

//app.use(session()); session middleware
// app.use(require("flash")());
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of Awesomeness',
}))

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});


export default app;