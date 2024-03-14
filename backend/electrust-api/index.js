const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    // show the status-page from the public folder
    res.sendFile(__dirname + '/public/status-page/index.html');
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }   
);
