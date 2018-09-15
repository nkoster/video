const
    express = require('express'),
    app = express(),
    server = app.listen(1025);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index')
});

console.log(server._connectionKey);
