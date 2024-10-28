const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/ticket-split', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Se conectó a la base de datos');
    } catch (error) {
        console.log('Error de conexión:', error);
    }
};


module.exports = { connectDB };