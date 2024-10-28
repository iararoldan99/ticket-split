import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('Se conectó a la base de datos');
  } catch (error) {
    console.log('Error de conexión:', error);
  }
};
