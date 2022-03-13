const  express = require('express');
const app = express();
const tasks = require('./routes/tasks');


//middleware
app.use('/',express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);




const port = 5000;

app.listen(port, console.log(`Server listening on port ${port}...`));