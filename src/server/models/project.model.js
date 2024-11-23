import mongoose from 'mongoose';

const { Schema } = mongoose;

export const expenseSchema = new mongoose.Schema({
  id: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  splitMethod: { type: String, enum: ['equitative', 'percentage'], required: true },
  splitDetails: [
    {
      member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      share: { type: Number, required: true },
      percentage: { type: Number }
    }
  ],
  date: { type: Date, default: Date.now }, // Fecha de cada gasto
});

const projectSchema = new Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String, trim: true },
  members: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      username: { type: String },
    }
  ],
  budget: { type: Number },
  totalSpent: { type: Number, default: 0 }, // Se puede actualizar con el total de `expenses`
  category: { type: String },
  expenses: [expenseSchema],
}, {
  timestamps: true,
});

export default mongoose.model('Project', projectSchema);
