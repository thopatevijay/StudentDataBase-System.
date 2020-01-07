require('./dbconnection/config/config');
require('./dbconnection/model/db');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');

var studentControllers = require('./controllers/studentControllers');
var newBatchControllers =  require('./controllers/newBatchControllers');
const rtsUser = require('./routes/user.router');

require('./passportConfig');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.use('/students', studentControllers);
app.use('/batch', newBatchControllers);

app.use('/api', rtsUser);



app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));



