const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/a65bys', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;
