const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 9000;

const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('dist'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

const listener = app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
