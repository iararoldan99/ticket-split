const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log('Se conectó a la base de datos');
    } catch (error) {
        console.log('Error de conexión:', error);
    } finally {
        await mongoose.disconnect();
    }
};

module.exports = { connectDB };