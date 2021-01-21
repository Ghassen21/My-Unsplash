const express = require("express");
const bodyParser = require("body-parser");
const { db } = require("./database-mysql/indexdb");
const authroutes = require('./routes/userRouter')
const app = express();
const PORT = process.env.PORT ;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//setup connection to database
db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log("Unable to connect to the database:" + err));

// serve images in directory named images 
app.use('/images', express.static('images'))

app.use('/', authroutes)
app.listen(PORT, () =>
  console.log(
    `listening on port ${PORT} and To get started, visit: http://localhost:6000`
  )
);
