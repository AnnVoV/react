/**
 * Created by ann on 16/9/13.
 */
require('./main.css');

var sub = require('./sub.js');
var app = document.createElement('div');



app.innerHTML = '<h1>This is another page</h1>';
app.appendChild(sub());
document.body.appendChild(app);