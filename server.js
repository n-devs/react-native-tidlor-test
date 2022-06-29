const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var cors = require('cors')
// variables
const dataPath = './data/users.json';

// helper methods
const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
      fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                  throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
      });
};

const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

      fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                  throw err;
            }

            callback();
      });
};

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// READ
app.get('/users', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                  throw err;
            }

            res.send(JSON.parse(data));
      });
});

// CREATE
app.post('/user', (req, res) => {

      readFile(data => {
            // Note: this isn't ideal for production use. 
            // ideally, use something like a UUID or other GUID for a unique ID value


            // add the new user
            // data[req.body.id] = req.body;
            // console.log(req.body);
            // console.log(data);
            writeFile(JSON.stringify(req.body.data, null, 2), () => {
                  res.status(200).send('new user added');
            });
      },
            true);
});


// UPDATE
app.put('/user/:id', (req, res) => {

      readFile(data => {

            // add the new user
            const userId = req.params["id"];
            // data[userId] = req.body;
            console.log(req.body);
            writeFile(JSON.stringify(req.body.data, null, 2), () => {
                  res.status(200).send(`users id:${userId} updated`);
            });
      },
            true);
});


// DELETE
app.delete('/user/:id', (req, res) => {

      readFile(data => {

            // delete the user
            const userId = req.params["id"];
            delete data[userId];
            
            // let removeData = data.filter(user => user.id !== parseInt(userId))
            writeFile(JSON.stringify(data, null, 2), () => {
                  res.status(200).send(`users id:${userId} removed`);
            });
      },
            true);
});

const server = app.listen(3001, () => {
      console.log('listening on port %s...', server.address().port);
});