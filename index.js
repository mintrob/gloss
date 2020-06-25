// Dependencies
const express = require('express');

// App Declarations
const app = express();

app.get('/', (req,res) => {
	res.send({ hello: 'there' });
});

// App Listener
const PORT = process.env.PORT || 8050;
app.listen(PORT);