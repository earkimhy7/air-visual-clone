const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Locations', {
    useNewUrlParser: true
}).then(() => {
    console.log('connected to the database.')
}).catch(e => {
    console.log('error')
});

// to prevent deprectation warning from mongodb
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
}