import mongoose from 'mongoose';

const { Schema } = mongoose;

const movementSchema = new Schema(
  {
    userId: {
      type: String,
    },
    projectId: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: { // tipos de movimientos: agregar/crear, actualizar, eliminar, dividir, gasto
      type: String,
      required: true,
    },
    category: { // categorias: proyectos, amigos, gastos, ingresos
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Movement', movementSchema);
